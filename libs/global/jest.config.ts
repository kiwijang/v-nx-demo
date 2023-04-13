module.exports = {
  displayName: 'global',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\.vue$': '@vue/vue3-jest',
    '.+\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ["ts", "tsx", "vue", "js", "json"],
  coverageDirectory: '../../coverage/libs/global',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'libs/global/tsconfig.spec.json',
      
    },
    'vue-jest': {
      tsConfig: 'libs/global/tsconfig.spec.json',
      
    },
  },
};
