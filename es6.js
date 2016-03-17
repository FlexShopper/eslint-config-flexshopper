module.exports = {
    'extends': 'flexshopper/index.js',
    'env': {
        'es6': true
    },
    'rules': {
        'no-var': 2,
        'strict': [
            2,
            'safe'
        ],
    },
    'parser': 'babel-eslint',
    'ecmaFeatures': {
        'blockBindings': true
    }
};
