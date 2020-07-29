import { ForbiddenError } from 'apollo-server-express'
import { skip } from 'graphql-resolvers'

export default (parent, args, { userId }) =>
  userId ? skip : new ForbiddenError('acesso negado')
