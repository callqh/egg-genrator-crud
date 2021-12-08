"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.primary = exports.warning = exports.success = exports.error = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const error = (msg)=>console.log(_chalk.default.red(msg))
;
exports.error = error;
const success = (msg)=>console.log(_chalk.default.green(msg))
;
exports.success = success;
const warning = (msg)=>console.log(_chalk.default.yellowBright(msg))
;
exports.warning = warning;
const primary = (msg)=>console.log(_chalk.default.blueBright(msg))
;
exports.primary = primary;

//# sourceMappingURL=logger.js.map