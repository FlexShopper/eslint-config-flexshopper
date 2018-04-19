'use strict';

module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react', 'jsx-a11y'],
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Promise: false,
        testUtils: false,
        clientTestUtils: false,
        enzyme: false,
        shallow: false,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            sourceType: 'module',
            impliedStrict: false,
            globalReturn: true,
        },
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'jsx-a11y/label-has-for': 0,
        'node/no-unsupported-features': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/href-no-hash': 0,
        'import/no-unresolved': [2, {
            ignore: [
                'react',
                'react-redux',
                'prop-types',
                'reselect',
                '^@flexshopper/fxa-',
                '^material-ui',
            ],
        }],
        'import/extensions': 0,
    },
};
