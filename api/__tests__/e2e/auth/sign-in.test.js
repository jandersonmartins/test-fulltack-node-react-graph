import { request } from 'graphql-request'
import appFactory from '../../../src/app-factory'
import User from '../../../src/models/user'

const app = appFactory()

let user

beforeAll(async () => {
  await app.start()
  user = await User.create({ email: 'sign-in@example.com', password: '123' })
})

afterAll(async () => {
  await User.deleteOne({ _id: user._id })
  await app.stop()
})

test('respond invalid credentials when email is invalid', async () => {
  const response = request('http://localhost:4000/graphql', `
    mutation signIn($input: AuthInput!) {
      signIn(input: $input) {
        token
      }
    }
  `, {
    input: {
      email: 'wrong@email.com',
      password: '123'
    }
  })

  await expect(response).rejects.toThrow('credenciais inválidas')
})

test('respond invalid credentials when password is invalid', async () => {
  const response = request('http://localhost:4000/graphql', `
    mutation signIn($input: AuthInput!) {
      signIn(input: $input) {
        token
      }
    }
  `, {
    input: {
      email: 'sign-in@example.com',
      password: 'asldkjasd'
    }
  })

  await expect(response).rejects.toThrow('credenciais inválidas')
})

test('respond jwt token', async () => {
  const response = await request('http://localhost:4000/graphql', `
    mutation signIn($input: AuthInput!) {
      signIn(input: $input) {
        token
      }
    }
  `, {
    input: {
      email: 'sign-in@example.com',
      password: '123'
    }
  })

  expect(response.signIn.token).toBeDefined()
})
