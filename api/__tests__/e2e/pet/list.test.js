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
  user = await User.create({ email: 'list-pet@email.com', password: '123' })
  await Pet.insertMany([
    { name: 'Pet One', owner: user._id },
    { name: 'Pet Two', owner: null }
  ])
  token = await encode({ id: user._id })
})

afterAll(async () => {
  await User.deleteOne({ _id: user._id })
  await Pet.deleteMany({})
  await app.stop()
})

test('respond forbidden', async () => {
  const response = request('http://localhost:4000/graphql', `
    {
      listPets {
        pets {
          name
        }
      }
    }
  `)

  await expect(response).rejects.toThrow('acesso negado')
})

test('respond with created pet', async () => {
  const client = new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      Authentication: `jwt ${token}`
    }
  })

  const response = await client.request(`
    {
      listPets {
        pets {
          name
          owner {
            email
          }
        }
      }
    }
  `)

  expect(response).toMatchObject({
    listPets: {
      pets: [
        {
          name: 'Pet One',
          owner: {
            email: user.email
          }
        }
      ]
    }
  })
})
