export default {
  typescript: true, // 在mdx支持typescript
  propsParser: true,
  title: 'business-components',
  dest: 'build-docs',
  files: 'docs/*.mdx', // 存放mdx文件的目录
  ignore: ['README.md', 'CHANGELOG.md'],
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
