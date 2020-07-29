const processes = () => {
  const processes = []

  return {
    add (...props) {
      processes.push(...props)
    },

    async start () {
      await this.each('start')
    },

    async stop () {
      await this.each('stop')
    },

    async each (fn) {
      for (const p of processes) {
        await p[fn]()
      }
    }
  }
}

export default processes
