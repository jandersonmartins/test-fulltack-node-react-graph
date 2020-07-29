import { combineResolvers } from 'graphql-resolvers'
import isAuthenticated from './is-authenticated'
import Pet from '../models/pet'
import User from '../models/user'

export default {
  Query: {
    listPets: combineResolvers(
      isAuthenticated,
      async (_, data, { userId }) => {
        const pets = await Pet.find({ owner: userId })
        return { pets }
      }
    )
  },

  Mutation: {
    createPet: combineResolvers(
      isAuthenticated,
      async (_, data, { userId }) => {
        const created = await Pet.create({ ...data, owner: userId })
        return { userId, name: created.name }
      }
    )
  },

  Pet: {
    owner: async ({ userId, owner }) => {
      const user = await User.findById(userId || owner)
      return {
        email: user.email
      }
    }
  }
}
