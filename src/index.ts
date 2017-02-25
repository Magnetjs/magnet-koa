import { Module } from 'magnet-core/module'
import * as Koa from 'koa'

import defaultConfig from './config/koa'

export default class KoaMagnet extends Module {
  async setup () {
    const config = this.prepareConfig('koa', defaultConfig)

    // Setup Koa
    this.app.koa = new Koa()
    this.app.application = this.app.koa // Backward compatible, maybe remove later
    this.app.koa.on('error', (err) => {
      this.log.error(err)
    })
  }
}
