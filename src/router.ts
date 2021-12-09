import { transformFromAstSync } from '@babel/core';
import { parse } from '@babel/parser';
import autoTrackPlugin from './plugin/insert_router';
import fs from 'fs-jetpack';
import path from 'path';
import * as logger from './utils/logger';
const router_path = path.resolve(fs.cwd(), './app/router.js');

export default (name: string) => {
  const sourceCode = fs.read(router_path, 'utf8');
  if (!sourceCode) {
    logger.error('没有读取到router文件');
    return;
  }
  const ast = parse(sourceCode!);
  // @ts-ignore
  const output = transformFromAstSync(ast, sourceCode, {
    plugins: [
      [
        autoTrackPlugin,
        {
          filename: name,
        },
      ],
    ],
  });

  try {
    fs.write(router_path, output?.code!);
  } catch (error) {
    logger.error('💥 路由注册失败');
  }
};
