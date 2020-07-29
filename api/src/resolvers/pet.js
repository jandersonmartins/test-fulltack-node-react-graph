import { UserInputError } from 'apollo-server-express'
import { combineResolvers } from 'graphql-resolvers'
import isAuthenticated from './is-authenticated'
import Pet from '../models/pet'
import User from '../models/user'
import debugFn from '../debug'

const debug = debugFn()

export default {
  Query: {
    listPets: combineResolvers(
      isAuthenticated,
      async (_, data, { userId }) => {
        const pets = await Pet.find({ owner: userId })
        debug('%d pets found', pets.length)
        return { pets }
      }
    ),

    findPetById: combineResolvers(
      isAuthenticated,
      async (_, { id }, { userId }) => {
        const pet = await Pet.findOne({ _id: id, owner: userId })
        if (!pet) {
          throw new UserInputError('não encontrado')
        }
        debug('pet found %o', pet)
        return pet
      }
    )
  },

  Mutation: {
    createPet: combineResolvers(
      isAuthenticated,
      async (_, data, { userId }) => {
        const created = await Pet.create({ ...data, owner: userId })
        debug('created pet %o', created)
        return { userId, name: created.name }
      }
    ),

    updatePet: combineResolvers(
      isAuthenticated,
      async (_, { id, name }, { userId }) => {
        const pet = await Pet.findOne({ _id: id, owner: userId })
        if (!pet) {
          throw new UserInputError('não encontrado')
        }

        pet.name = name
        await pet.save()

        debug('updated pet %o', pet)

        return pet
      }
    ),

    deletePet: combineResolvers(
      isAuthenticated,
      async (_, { id }, { userId }) => {
        const pet = await Pet.findOne({ _id: id, owner: userId })
        if (!pet) {
          throw new UserInputError('não encontrado')
        }

        await Pet.deleteOne({ _id: pet.id })

        return true
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
