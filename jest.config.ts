export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', 
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], 
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
      
    },
  };