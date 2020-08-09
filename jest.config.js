module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  moduleDirectories: [
    'node_modules',
    '<rootDir>/setup',
    `<rootDir>/src`
  ],
  testMatch: ["<rootDir>/src/**/*.+(spec|test).[jt]s?(x)" ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!build',
    '!src/**/*.d.ts',
    '!src/**/index.ts'
  ],
};
