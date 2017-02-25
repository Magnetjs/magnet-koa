import { Module } from 'magnet-core/module'
import defaultConfig from './config/koa'

export default class KoaStart extends Module {
  async setup () {
    try {
      const config = this.prepareConfig('koa', defaultConfig)

      this.app.koaServer = this.app.koa.listen(config.port)
      this.app.server = this.app.koaServer
      this.log.info(`Server started at port ${config.port}`)
    } catch (err) {
      this.log.error(err)
      throw err
    }
  }
}
