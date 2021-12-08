// @ts-ignore
import pkg from '../package.json';
import sade from 'sade';
import create from './create';
const version = pkg.version; //版本号

const cliName = Object.keys(pkg.bin)[0]; //包名称
const prog = sade(cliName);

prog.version(version).option('-j, --jwt', '路由是否开启jwt验证');

prog
  .command('create <name>')
  .describe('生成一个Model文件以及一套CRUD模板')
  .example('create data')
  .action(async (name) => {
    // 生成模板
    create(name);
  });

prog.parse(process.argv);
