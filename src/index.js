import Base from 'magnet-core/dist/base';
import Koa from 'koa';

export default class KoaMagnet extends Base {
  async setup() {
    // Setup Koa
    this.app.application = new Koa();
    this.app.application.on('error', (err) => {
      this.log.error(err);
    });
  }
}
