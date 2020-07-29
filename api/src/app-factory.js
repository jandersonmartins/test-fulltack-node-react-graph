import appProcesses from './app-process'
import { app } from './app'
import { database } from './database'

const factory = () => {
  const processes = appProcesses()
  processes.add(app, database)
  return processes
}

export default factory
