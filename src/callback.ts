import { Module } from 'magnet-core/module'
import defaultConfig from './config/koa'

export default class KoaStart extends Module {
  async setup () {
    const config = this.prepareConfig('koa', defaultConfig)

    if (!config.magnet) { return }

    this.app.config[config.magnet].requestListener = this.app.koa.callback()
  }
}
