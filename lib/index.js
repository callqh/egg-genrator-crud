"use strict";
var _packageJson = _interopRequireDefault(require("../package.json"));
var _sade = _interopRequireDefault(require("sade"));
var _create = _interopRequireDefault(require("./create"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const version = _packageJson.default.version; //版本号
const cliName = Object.keys(_packageJson.default.bin)[0]; //包名称
const prog = (0, _sade).default(cliName);
prog.version(version).option('-j, --jwt', '路由是否开启jwt验证');
prog.command('create <name>').describe('生成一个Model文件以及一套CRUD模板').example('create data').action(async (name)=>{
    // 生成模板
    (0, _create).default(name);
});
prog.parse(process.argv);

//# sourceMappingURL=index.js.map