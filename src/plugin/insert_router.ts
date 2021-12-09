import { declare, BabelAPI } from '@babel/helper-plugin-utils';
import * as logger from '../utils/logger';

const autoTrackPlugin = declare((api: BabelAPI, options: any): any => {
  api.assertVersion(7);
  return {
    visitor: {
      'ClassMethod|ArrowFunctionExpression|FunctionExpression|FunctionDeclaration'(path: any) {
        const body = path.get('body');
        const flag = body.node.body.some((item: any) => {
          if (item.type === 'ExpressionStatement') {
            const hasRouter = item.expression.arguments.find(
              (i: any) => i.value === `/${options.filename}`
            );
            return hasRouter;
          }
        });
        if (flag) {
          path.stop();
          logger.error('💥 该路由已经注册');
          return;
        }
        // 生成需要插入的语句
        const insertStatement = api.template.statement(
          `router.resources('${options.filename}', '/${options.filename}', controller.${options.filename}) `
        )();
        // 插入
        body.node.body.push(insertStatement);
        logger.success('路由注入成功');
      },
    },
  };
});

export default autoTrackPlugin;
