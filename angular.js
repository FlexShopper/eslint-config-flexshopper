'use strict';

module.exports = {
    'extends': './index.js',
    'env': {
        'protractor': true,
        'jasmine': true,
        'commonjs': true
    },
    'rules': {
        'strict': ['off']
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6
    },
    'globals': {
        'spyOn': false,
        'angular': false
    }
};
