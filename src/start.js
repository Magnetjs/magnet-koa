import Base from 'magnet-core/base'
import defaultConfig from './config/koa'

export default class KoaStart extends Base {
  async setup () {
    try {
      this.koaConfig = Object.assign(defaultConfig, this.config.koa, this.options)

      if (this.koaConfig.port) {
        this.app.server = this.app.application.listen(this.koaConfig.port)
        this.log.info(`Server started at port ${this.koaConfig.port}`)
      }
    } catch (err) {
      this.log.error(err)
      throw err
    }
  }
}
