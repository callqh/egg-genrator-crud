import path from 'path';
import fs from 'fs-jetpack';
import * as logger from './utils/logger';
import modelTemplate from './template/model';
import controllerTemplate from './template/controller';
import loggerTable from './utils/table';
const model_path = path.resolve(fs.cwd(), './app/model');
const controller_path = path.resolve(fs.cwd(), './app/controller');

const init = (name: string) => {
  const filepath = path.resolve(model_path, `${name}.js`);
  const isExist = fs.exists(filepath);
  // 判断新建文件是否存在
  if (isExist === 'file') {
    return logger.warning(`💥 文件已存在，请勿重复创建=> ${filepath} `);
  }
  // 创建对应文件
  fs.write(filepath, modelTemplate(name));
  logger.success(`🌈 Model文件创建成功`);
  logger.primary(`🐬 请前往该文件，新增对应字段=>  ${filepath}`);
  // 创建controller文件
  createController(name);
};

const createController = (name: string) => {
  const filepath = path.resolve(controller_path, `${name}.js`);
  if (fs.exists(filepath) === 'file') {
    return logger.warning(`💥 文件已存在，请勿重复创建=> ${filepath} `);
  }
  // 创建对应文件
  fs.write(filepath, controllerTemplate(name));
  logger.success(`🌈 Controller文件创建成功`);
  logger.primary(`🐬 CRUD接口生成成功:`);
  loggerTable(name);
};

export default init;
