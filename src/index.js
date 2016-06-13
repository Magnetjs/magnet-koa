import Base from 'magnet-core/dist/base';
import Koa from 'koa';
import defaultConfig from './config/koa';

export default class KoaMagnet extends Base {
  async setup() {
    this.koaConfig = Object.assign(defaultConfig, this.config.koa, this.options);
    // Setup Koa
    this.app.application = new Koa();
    this.app.application.on('error', (err) => {
      this.consoleError(err);
    });
  }

  async start() {
    if (this.koaConfig.port) {
      this.app.server = this.app.application.listen(this.koaConfig.port);
      this.consoleInfo(`Server started at port ${this.koaConfig.port}`);
    }
  }

  consoleInfo(err) {
    if (this.app.log) {
      this.app.log.info(err);
    } else {
      console.log(err);
    }
  }

  consoleError(err) {
    if (this.app.log) {
      this.app.log.error(err);
    } else {
      console.error(err);
    }
  }
}
