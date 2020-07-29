import debug from 'debug'

const debugFn = (namespace = 'app-test') => debug(namespace)

export default debugFn
