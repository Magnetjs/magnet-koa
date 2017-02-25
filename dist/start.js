"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const koa_1 = require("./config/koa");
class KoaStart extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const config = this.setConfig('koa', koa_1.default);
                this.app.koaServer = this.app.koa.listen(config.port);
                this.app.server = this.app.koaServer;
                this.log.info(`Server started at port ${config.port}`);
            }
            catch (err) {
                this.log.error(err);
                throw err;
            }
        });
    }
}
exports.default = KoaStart;
//# sourceMappingURL=start.js.map