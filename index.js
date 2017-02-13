'use strict';

module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'mocha': true,
        'mongo': true
    },
    'parserOption': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'globalReturn': true
        }
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [ 'error', 4, { 'MemberExpression': 1 }],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'max-len': ['error', 120],
        'camelcase': ['error'],
        'eqeqeq': ['error', 'always'],
        'strict': ['error', 'safe'],
        'new-cap': ['error'],
        'no-bitwise': ['warn'],
        'no-caller': ['error'],
        'no-cond-assign': ['error', 'except-parens'],
        'no-debugger': ['error'],
        'space-before-function-paren': ['error'],
        'no-empty': ['error'],
        'no-eval': ['error'],
        'no-extend-native': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-iterator': ['error'],
        'no-multi-str': ['error'],
        'no-new': ['error'],
        'no-proto': ['error'],
        'no-script-url': ['error'],
        'no-sequences': ['error'],
        'no-undef': ['error'],
        'no-unused-vars': ['error', { 'vars': 'all', 'varsIgnorePattern': '[$rootScope]' }],
        'no-with': ['error'],
        'no-inner-declarations': ['warn'],
        'vars-on-top': ['warn'],
        'object-curly-spacing': ['error', 'always'],
        'valid-typeof': ['error'],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'eol-last': ['error'],
        'no-console': ['warn']
    },
    'globals': {
        'define': false,
        'require': false,
        'exports': false,
        'module': false,
        'describe': false,
        'before': false,
        'beforeEach': false,
        'after': false,
        'afterEach': false,
        'it': false,
        'inject': false,
        'expect': false
    }
};
