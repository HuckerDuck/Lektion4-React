/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    // ⚠️ Tell Jest these extensions use ESM
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
  
    // ESM-aware ts-jest preset
    preset: 'ts-jest/presets/default-esm',
  
    testEnvironment: 'jsdom',
  
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.json',
        useESM: true
      }
    },
  
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
  
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
    // CSS modules mocking
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
  
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  }
  