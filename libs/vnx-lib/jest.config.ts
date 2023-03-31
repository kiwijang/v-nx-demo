module.exports = {
  displayName: 'libs-vnx-lib',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../../coverage/libs/libs/vnx-lib',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'libs/libs/vnx-lib/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'libs/libs/vnx-lib/tsconfig.spec.json',
    },
  },
};
