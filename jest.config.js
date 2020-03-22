
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./client/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/client/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/client/__mocks__/styleMock.js',
  },
}
