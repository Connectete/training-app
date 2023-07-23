module.exports = {
  testMatch: ['**/test/e2e/**/?(*.)+(spec|test).[t]s?(x)'],
  setupFiles: ['./src/test/setup-tests.ts'],
  globalSetup: '<rootDir>/src/test/global_setup.ts',
  globalTeardown: '<rootDir>/src/test/global_teardown.ts',
  setupFilesAfterEnv: ['./src/test/setup-tests-after-env.ts'],
}