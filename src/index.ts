import { Module } from 'magnet-core/module'
import * as Koa from 'koa'

export default class MagnetKoa extends Module {
  get moduleName () { return 'koa' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.insert(new Koa())
    this.app.koa.on('error', (err) => {
      this.log.error(err)
    })
  }
}
