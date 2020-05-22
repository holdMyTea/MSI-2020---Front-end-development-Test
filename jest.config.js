module.exports = {
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__tests__/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__tests__/mocks/styleMock.js'
  },
  setupFiles: ['<rootDir>/__tests__/testSetup.js'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/mocks', '<rootDir>/node_modules/', '<rootDir>/__tests__/testSetup.js']
}
