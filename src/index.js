import Base from 'magnet-core/dist/base';
import Koa from 'koa';
import defaultConfig from './config/koa';

export default class KoaMagnet extends Base {
  async setup() {
    this.koaConfig = Object.assign(defaultConfig, this.config.koa);
    // Setup Koa
    this.app.application = new Koa();
    this.app.application.on('error', (err) => {
      this.log.error(err);
    });
  }

  async start() {
    if (this.koaConfig.port) {
      this.app.application.listen(this.koaConfig.port);
    }
  }
}
