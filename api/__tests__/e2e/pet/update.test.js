import { GraphQLClient, request } from 'graphql-request'
import appFactory from '../../../src/app-factory'
import User from '../../../src/models/user'
import Pet from '../../../src/models/pet'
import { encode } from '../../../src/jwt'

const app = appFactory()

let token
let user
let pet
let client

beforeAll(async () => {
  await app.start()

  user = await User.create({ email: 'update-pet@email.com', password: '123' })
  pet = await Pet.create({ name: 'Pet One', owner: user._id })

  token = await encode({ id: user._id })

  client = new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      Authentication: `jwt ${token}`
    }
  })
})

afterAll(async () => {
  await User.deleteOne({ _id: user._id })
  await Pet.deleteOne({ _id: pet._id })

  await app.stop()
})

test('respond forbidden', async () => {
  const response = request('http://localhost:4000/graphql', `
    mutation updatePet($id: ID!, $name: String!) {
      updatePet(id: $id, name: $name) {
        name
      }
    }
  `, {
    id: pet._id.toString(),
    name: 'new'
  })

  await expect(response).rejects.toThrow('acesso negado')
})

test('respond not found when id not exists', async () => {
  const response = client.request(`
    mutation updatePet($id: ID!, $name: String!) {
      updatePet(id: $id, name: $name) {
        name
      }
    }
  `, {
    id: '5f44c0cc3fbf3d01922ca25f',
    name: 'Foo'
  })

  await expect(response).rejects.toThrow('não encontrado')
})

test('respond with created pet', async () => {
  const newName = 'Changed'

  const response = await client.request(`
    mutation updatePet($id: ID!, $name: String!) {
      updatePet(id: $id, name: $name) {
        name
      }
    }
  `, {
    id: pet._id.toString(),
    name: newName
  })

  expect(response).toMatchObject({
    updatePet: {
      name: newName
    }
  })
})
