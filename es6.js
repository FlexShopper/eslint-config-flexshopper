module.exports = {
    'extends': './index.js',
    'env': {
        'es6': true,
        'node': true,
        'mongo': true,
        'mocha': true,
        'commonjs': true
    },
    'parserOption': {
        'ecmaVersion': 6
    },
    'rules': {
        'no-var': 2,
        'strict': [2, 'global'],
        'keyword-spacing': 2
    }
};
