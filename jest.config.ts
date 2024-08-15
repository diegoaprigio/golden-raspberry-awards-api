import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    modulePaths: ['<rootDir>/src/'],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    testRegex: '\\.integration.test\\.(js|ts)$',
    testTimeout: 30000,
};

export default config;