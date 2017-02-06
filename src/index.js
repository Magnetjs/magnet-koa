import Base from 'magnet-core/base'
import Koa from 'koa'
import defaultConfig from './config/koa'

export default class KoaMagnet extends Base {
  async setup () {
    this.koaConfig = Object.assign(defaultConfig, this.config.koa, this.options)
    // Setup Koa
    this.app.application = new Koa()
    this.app.application.on('error', (err) => {
      this.app.log.error(err)
    })
  }
}
