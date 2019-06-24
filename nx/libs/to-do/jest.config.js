module.exports = {
  name: 'to-do',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/to-do',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
