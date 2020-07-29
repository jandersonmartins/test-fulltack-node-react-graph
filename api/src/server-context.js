import { decode } from './jwt'
import User from './models/user'

const parseToken = authHeader => authHeader.split(' ')[1]

const serverContext = async ({ req }) => {
  const { authentication } = req.headers
  if (authentication) {
    const token = parseToken(authentication)
    try {
      const decoded = await decode(token)
      const user = await User.findOne({ _id: decoded.id })
      return { userId: user._id }
    } catch (e) {
      /** silent */
    }
  }
  return { userId: null }
}

export default serverContext
