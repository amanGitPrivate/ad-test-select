module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFiles: [
    '<rootDir>/setupTests.js',
  ],
  moduleNameMapper: {
    "\\.(svg)$": "<rootDir>/jestSvgFile.js",
  },
};
