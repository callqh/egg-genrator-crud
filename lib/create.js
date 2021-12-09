"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _fsJetpack = _interopRequireDefault(require("fs-jetpack"));
var logger = _interopRequireWildcard(require("./utils/logger"));
var _model = _interopRequireDefault(require("./template/model"));
var _controller = _interopRequireDefault(require("./template/controller"));
var _table = _interopRequireDefault(require("./utils/table"));
var _router = _interopRequireDefault(require("./router"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
const model_path = _path.default.resolve(_fsJetpack.default.cwd(), './app/model');
const controller_path = _path.default.resolve(_fsJetpack.default.cwd(), './app/controller');
const init = (name)=>{
    const filepath = _path.default.resolve(model_path, `${name}.js`);
    const isExist = _fsJetpack.default.exists(filepath);
    // 判断新建文件是否存在
    if (isExist === 'file') {
        return logger.warning(`💥 文件已存在，请勿重复创建=> ${filepath} `);
    }
    // 创建对应文件
    _fsJetpack.default.write(filepath, (0, _model).default(name));
    logger.success(`🌈 Model文件创建成功`);
    logger.primary(`🐬 请前往该文件，新增对应字段=>  ${filepath}`);
    // 创建controller文件
    createController(name);
    // 注册路由
    (0, _router).default(name);
};
const createController = (name)=>{
    const filepath = _path.default.resolve(controller_path, `${name}.js`);
    if (_fsJetpack.default.exists(filepath) === 'file') {
        return logger.warning(`💥 文件已存在，请勿重复创建=> ${filepath} `);
    }
    // 创建对应文件
    _fsJetpack.default.write(filepath, (0, _controller).default(name));
    logger.success(`🌈 Controller文件创建成功`);
    logger.primary(`🐬 CRUD接口生成成功:`);
    (0, _table).default(name);
};
var _default = init;
exports.default = _default;

//# sourceMappingURL=create.js.map