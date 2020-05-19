module.exports = {
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__tests__/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__tests__/mocks/styleMock.js'
  },
  testPathIgnorePatterns: ['<rootDir>/__tests__/mocks', '<rootDir>/node_modules/']
}
