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
        'indent': [ 'error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'max-len': ['error', 100],
        'camelcase': ['error'],
        'eqeqeq': ['error', 'always'],
        'strict': ['error', 'safe'],
        'new-cap': ['error'],
        'no-bitwise': ['error'],
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
        'no-console': ['warn'],
        'eol-last': ['error']
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