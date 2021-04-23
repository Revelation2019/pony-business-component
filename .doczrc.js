export default {
  typescript: true,
  title: 'business-components',
  dest: 'build-docs',
  files: 'docs/*.mdx',
  ignore: ['README.md', 'CHANGELOG.md'],
  notUseSpecifiers: true,
  filterComponents: files => files.filter(file => /([^d]\.tsx?)$/.test(file)),
};
