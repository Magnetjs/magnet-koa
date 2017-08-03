import { Module } from 'magnet-core/module'
import * as Koa from 'koa'

export default class MagnetKoa extends Module {
  init () {
    this.moduleName = 'koa'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.insert(new Koa())
    this.app.koa.on('error', (err) => {
      this.log.error(err)
    })
  }
}
