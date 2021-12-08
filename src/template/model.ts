export default (name: string) => {
  //首字母大写
  const filename_upper = name.replace(/^\S/, (s) => {
    return s.toUpperCase();
  });
  // 返回模板字符串
  return `
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ${filename_upper} = app.model.define('${name}', {
    // 默认id为int类型，主键，自增
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    /** ====== 新增字段 ======= */
    // example: STRING(30),

    /** ===================== */
    created_at: DATE,
    updated_at: DATE,
  });

  return ${filename_upper};
};
`;
};
