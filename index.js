'use strict';

module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true,
        mongo: true,
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'script',
        ecmaFeatures: {
            sourceType: 'script',
            impliedStrict: false,
            globalReturn: true,
        },
    },
    rules: {
        indent: ['error', 4],
        'max-len': ['error', 120],
        strict: ['error', 'safe'],
        'arrow-parens': ['error', 'always'],
        'arrow-body-style': 0,
        'global-require': 0,
        'no-underscore-dangle': 0,
        'no-shadow': 0,
        'import/no-dynamic-require': 0,
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
    },
};
