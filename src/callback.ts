import { Module } from 'magnet-core/module'

export default class MagnetKoaCallback extends Module {
  get moduleName () { return 'koa' }
  get defaultConfig () { return __dirname }

  async setup () {
    if (!this.config.magnet) { return }

    this.app.config[this.config.magnet].requestListener = this.app.koa.callback()
  }
}
