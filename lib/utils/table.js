"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _consoleGrid = _interopRequireDefault(require("console-grid"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const consoleGrid = new _consoleGrid.default();
const CGS = _consoleGrid.default.Style;
var _default = (name)=>{
    const data = {
        option: {
        },
        columns: [
            {
                id: 'url',
                name: `url`,
                type: 'string'
            },
            {
                id: 'method',
                name: 'method',
                type: 'string'
            },
            {
                id: 'describe',
                name: 'describe'
            }, 
        ],
        rows: [
            {
                url: `/${name}`,
                method: `${CGS.br.yellow('GET')}`,
                describe: `查询数据`,
                unicode: 'Chinese,中文'
            },
            {
                url: `/${name}`,
                method: `${CGS.br.red('POST')}`,
                describe: `新增数据`,
                unicode: 'Chinese,中文'
            },
            {
                url: `/${name}/:id`,
                method: `${CGS.br.yellow('GET')}`,
                describe: `查询对应id的数据`,
                unicode: 'Chinese,中文'
            },
            {
                url: `/${name}/:id`,
                method: `${CGS.br.green('PUT')}`,
                describe: `更新对应id的数据`,
                unicode: 'Chinese,中文'
            },
            {
                url: `/${name}/:id`,
                method: `${CGS.br.blue('DELETE')}`,
                describe: `删除对应id的数据`,
                unicode: 'Chinese,中文'
            }, 
        ]
    };
    consoleGrid.render(data);
};
exports.default = _default;

//# sourceMappingURL=table.js.map