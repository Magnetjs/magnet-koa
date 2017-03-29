import { Module } from 'magnet-core/module'
import defaultConfig from './config/koa'

export default class KoaStart extends Module {
  async setup () {
    try {
      const config = this.prepareConfig('koa', defaultConfig)

      const serverPromise = new Promise((resolve, reject) => {
        this.app.koaServer = this.app.koa.listen(config.port, (err) => {
          if (err) {
            reject(err)
            return
          }

          this.log.info(`Server started at port ${config.port}`)
          resolve()
        })
      })
    } catch (err) {
      this.log.error(err)
      throw err
    }
  }
}
