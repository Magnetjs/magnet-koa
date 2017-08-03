import { Module } from 'magnet-core/module'

export default class MagnetKoaCallback extends Module {
  init () {
    this.moduleName = 'koa'
    this.defaultConfig = __dirname
  }

  async setup () {
    if (!this.config.magnet) { return }

    this.app.config[this.config.magnet].requestListener = this.app.koa.callback()
  }
}
