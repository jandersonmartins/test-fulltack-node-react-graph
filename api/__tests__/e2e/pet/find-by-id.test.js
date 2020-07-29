import { GraphQLClient, request } from 'graphql-request'
import appFactory from '../../../src/app-factory'
import User from '../../../src/models/user'
import Pet from '../../../src/models/pet'
import { encode } from '../../../src/jwt'

const app = appFactory()
let token
let client
let user
let pets

beforeAll(async () => {
  await app.start()

  user = await User.create({ email: 'find-pet@email.com', password: '123' })
  pets = await Pet.insertMany([
    { name: 'Pet One', owner: user._id },
    { name: 'Pet Two', owner: null }
  ])

  token = await encode({ id: user._id })

  client = new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      Authentication: `jwt ${token}`
    }
  })
})

afterAll(async () => {
  await User.deleteOne({ _id: user._id })
  await Pet.deleteMany({})
  await app.stop()
})

test('respond forbidden', async () => {
  const response = request('http://localhost:4000/graphql', `
    {
      findPetById(id: 1) {
        name
      }
    }
  `)

  await expect(response).rejects.toThrow('acesso negado')
})

test('respond not found when is not the same owner', async () => {
  const response = client.request(`
    query findPetById($id: ID!) {
      findPetById(id: $id) {
        name
        owner {
          email
        }
      }
    }
  `, {
    id: pets[1]._id.toString()
  })

  await expect(response).rejects.toThrow('não encontrado')
})

test('respond not found when id not exists', async () => {
  const response = client.request(`
    query findPetById($id: ID!) {
      findPetById(id: $id) {
        name
      }
    }
  `, {
    id: '5f44c0cc3fbf3d01922ca23f'
  })

  await expect(response).rejects.toThrow('não encontrado')
})

test('respond with created pet', async () => {
  const response = await client.request(`
    query findPetById($id: ID!) {
      findPetById(id: $id) {
        name
        owner {
          email
        }
      }
    }
  `, {
    id: pets[0]._id.toString()
  })

  expect(response).toMatchObject({
    findPetById: {
      name: 'Pet One',
      owner: {
        email: user.email
      }
    }
  })
})
