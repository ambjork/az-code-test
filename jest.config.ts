import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|css)$': '<rootDir>/test/__ mocks __/fileMock.js',
  },
}
export default config;
