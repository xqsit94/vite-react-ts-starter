/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
// jest.config.ts
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/dist/',
    '/coverage/'
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // if you are using CSS|LESS|SCSS modules
    '^@/(.*)$': '<rootDir>/src/$1', // if you are using TypeScript paths in tsconfig.json
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: {
        // allow synthetic default imports
        // this is important if your tsconfig.json has `esModuleInterop` set to `true`
        esModuleInterop: true
      }
    }
  }
}

export default config
