import { GraphQLClient, request } from 'graphql-request'
import appFactory from '../../../src/app-factory'
import User from '../../../src/models/user'
import Pet from '../../../src/models/pet'
import { encode } from '../../../src/jwt'

const app = appFactory()
let token
let user

beforeAll(async () => {
  await app.start()
  user = await User.create({ email: 'create-pet@email.com', password: '123' })
  token = await encode({ id: user._id })
})

afterAll(async () => {
  await User.deleteOne({ _id: user._id })
  await Pet.deleteMany({})
  await app.stop()
})

test('respond forbidden', async () => {
  const response = request('http://localhost:4000/graphql', `
    mutation createPet($name: String!) {
      createPet(name: $name) {
        name
      }
    }
  `, {
    name: 'Chyco'
  })

  await expect(response).rejects.toThrow('acesso negado')
})

test('respond with created pet', async () => {
  const client = new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      Authentication: `jwt ${token}`
    }
  })

  const response = await client.request(`
    mutation createPet($name: String!) {
      createPet(name: $name) {
        name
        owner {
          email
        }
      }
    }
  `, {
    name: 'Chyco'
  })

  expect(response).toEqual({
    createPet: {
      name: 'Chyco',
      owner: {
        email: user.email
      }
    }
  })
})
