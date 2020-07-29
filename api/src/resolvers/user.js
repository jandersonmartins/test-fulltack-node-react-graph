import { AuthenticationError } from 'apollo-server-express'
import User from '../models/user'
import { encode } from '../jwt'
import debugFn from '../debug'

const debug = debugFn()

export default {
  Mutation: {
    signUp: async (_, { input }) => {
      const created = await User.create(input)
      debug('created user %o', created)
      return { email: created.email }
    },

    signIn: async (_, { input: { email, password } }) => {
      const user = await User.findOne({ email })
      debug('sigin user found %s', user)
      if (!user) {
        throw new AuthenticationError('credenciais inválidas')
      }

      const valid = await user.verifyPassword(password)
      if (!valid) {
        throw new AuthenticationError('credenciais inválidas')
      }

      const token = await encode({ id: user._id })
      debug('signin token %s', token)

      return { token }
    }
  }
}
