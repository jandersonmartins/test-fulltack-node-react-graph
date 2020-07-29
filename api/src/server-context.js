import { decode } from './jwt'
import User from './models/user'
import debugFn from './debug'

const debug = debugFn()

const parseToken = authHeader => authHeader.split(' ')[1]

const serverContext = async ({ req }) => {
  const { authentication } = req.headers
  if (authentication) {
    const token = parseToken(authentication)
    debug('auth token %s', token)
    try {
      const decoded = await decode(token)
      const user = await User.findById(decoded.id)
      debug('user context %O', user)
      return { userId: user._id }
    } catch (e) {
      debug('context error %s', e.message)
      /** silent */
    }
  }
  return { userId: null }
}

export default serverContext
