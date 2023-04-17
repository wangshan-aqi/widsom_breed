/* eslint-disable no-undef */
// Commitlint 配置文件
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // 0:不检查 1:警告 2:错误
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档修改
        'style', // 代码格式修改，不是样式修改
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 测试
        'build', // 构建
        'ci', // 持续集成
        'chore', // 其他修改
        'revert', // 回滚
        'config', // 配置修改
        'merge', // 合并分支
        'release', // 发布
      ],
    ],
  }, // 自定义规则
  'type-empty': [2, 'never'], // never type不能为空; always type可以为空
  'type-case': [2, 'always', 'lower-case'], // type必须小写 type必须小写，upper-case大写，camel-case小驼峰，kebab-case短横线，pascal-case大驼峰，snake-case下划线, start-case首字母大写, upper-case大写, lower-case小写
  'scope-empty': [2, 'never'], // never scope不能为空; always scope可以为空
  'subject-empty': [2, 'never'], // never subject不能为空; always subject可以为空
  'subject-case': [2, 'always', 'lower-case'], // subject必须小写
  'subject-full-stop': [2, 'never', '.'], // never subject不能以.结尾; always subject可以以.结尾
  'header-max-length': [2, 'always', 72], // header最大长度
};
