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
const koa_1 = require("koa");
const koa_2 = require("./config/koa");
class KoaMagnet extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.prepareConfig('koa', koa_2.default);
            // Setup Koa
            this.app.koa = new koa_1.default();
            this.app.application = this.app.koa; // Backward compatible, maybe remove later
            this.app.koa.on('error', (err) => {
                this.log.error(err);
            });
        });
    }
}
exports.default = KoaMagnet;
//# sourceMappingURL=index.js.map