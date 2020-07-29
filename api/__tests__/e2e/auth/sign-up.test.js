import { request } from 'graphql-request'
import appFactory from '../../../src/app-factory'
import User from '../../../src/models/user'

const app = appFactory()

const cleanUser = () => User.deleteMany({ email: 'sign-up@example.com' })

beforeAll(async () => {
  await app.start()
  await cleanUser()
})

afterAll(async () => {
  await cleanUser()
  await app.stop()
})

test('respond with created user', async () => {
  const response = await request('http://localhost:4000/graphql', `
    mutation signUp($input: AuthInput!) {
      signUp(input: $input) {
        email
      }
    }
  `, {
    input: {
      email: 'sign-up@example.com',
      password: '123'
    }
  })

  expect(response).toEqual({ signUp: { email: 'sign-up@example.com' } })
})
