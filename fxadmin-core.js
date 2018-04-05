'use strict';

module.exports = {
    extends: [
        './index.js',
        'plugin:node/recommended',
        'plugin:jest/recommended',
    ],
    plugins: [
        'node',
        'promise',
        'jest',
    ],
    env: {
        jest: true,
        es6: true,
        node: true,
    },
    globals: {
        Promise: false,
        testUtils: false,
        serverTestUtils: false,
    },
    rules: {
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'object-curly-newline': 0,
        'promise/prefer-await-to-then': 1,
        'promise/prefer-await-to-callbacks': 0,
    },
};
