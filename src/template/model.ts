export default (name: string) => {
  //首字母大写
  const filename_upper = name.replace(/^\S/, (s) => {
    return s.toUpperCase();
  });
  // 返回模板字符串
  return `
'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const ${filename_upper} = app.model.define('${name}', {
    // 默认id为int类型，主键，自增
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    /** ====== 删除字段会将数据库中对应字段的数据也删除，属于危险操作，请三思而后行 ======= */
    /** ====== 此处新增字段 ======= */


  });

  return ${filename_upper};
};
`;
};
