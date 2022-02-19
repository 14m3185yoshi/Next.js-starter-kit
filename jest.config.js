// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({ dir: "./" });

// Add any custom config to be passed to Jest
/**
 * @type {import('@jest/types').Config.InitialOptions}
 **/
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  modulePathIgnorePatterns: ["<rootDir>/e2e/"],
  moduleNameMapper: {
    "^~/src/(.*)": "<rootDir>/src/$1",
    "^~/use/(.*)": "<rootDir>/use/$1",
    "^~/utils/(.*)": "<rootDir>/utils/$1",
    "@store/(.*)": "<rootDir>/src/store/$1"
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
    "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
