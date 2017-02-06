'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('magnet-core/base');

var _base2 = _interopRequireDefault(_base);

var _koa = require('./config/koa');

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KoaStart = function (_Base) {
  _inherits(KoaStart, _Base);

  function KoaStart() {
    _classCallCheck(this, KoaStart);

    return _possibleConstructorReturn(this, (KoaStart.__proto__ || Object.getPrototypeOf(KoaStart)).apply(this, arguments));
  }

  _createClass(KoaStart, [{
    key: 'setup',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.koaConfig = Object.assign(_koa2.default, this.config.koa, this.options);

                if (this.koaConfig.port) {
                  this.app.server = this.app.application.listen(this.koaConfig.port);
                  this.log.info('Server started at port ' + this.koaConfig.port);
                }
                _context.next = 9;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context['catch'](0);

                this.log.error(_context.t0);
                throw _context.t0;

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5]]);
      }));

      function setup() {
        return _ref.apply(this, arguments);
      }

      return setup;
    }()
  }]);

  return KoaStart;
}(_base2.default);

exports.default = KoaStart;