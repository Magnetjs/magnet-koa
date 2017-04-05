import { Module } from 'magnet-core/module'

export default class MagnetKoaStart extends Module {
  get moduleName () { return 'koa' }
  get defaultConfig () { return __dirname }

  async setup () {
    try {
      const serverPromise = new Promise((resolve, reject) => {
        this.app.koaServer = this.app.koa.listen(this.config.port, (err) => {
          if (err) {
            reject(err)
            return
          }

          this.log.info(`Server started at port ${this.config.port}`)
          resolve()
        })
      })

      await serverPromise
    } catch (err) {
      this.log.error(err)
      throw err
    }
  }
}
