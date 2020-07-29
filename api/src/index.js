import appFactory from './app-factory'
import debugFn from './debug'

const debug = debugFn()
const appProcesses = appFactory()

;(async () => {
  debug('NODE_ENV %s', process.env.NODE_ENV)

  try {
    await appProcesses.start()
    debug('application running')
  } catch (e) {
    debug('application startup error: %s', e.message)
    process.exit(1)
  }
})()

// CTRL + C :)
process.on('SIGINT', async () => {
  try {
    await appProcesses.stop()
    process.exit(0)
  } catch (e) {
    process.exit(1)
  }
})
