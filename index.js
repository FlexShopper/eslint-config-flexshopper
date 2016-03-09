module.exports = {
    'extends': 'yandex',
    'env': {
        'node': true,
        'mocha': true,
        'browser': true,
        'builtin': true,
        'prototypejs': true
    },
    'rules': {
        'max-len': [2, 100, 4, { 'ignoreComments': true, 'ignoreUrls': true, 'ignorePattern': '\/.*\/' }],
        'camelcase': 2,
        'curly': [
            2,
            'all'
        ],
        'dot-notation': [
            2,
            {
                'allowKeywords': true
            }
        ],
        'eqeqeq': [
            2,
            'allow-null'
        ],
        'strict': [
            2,
            'function'
        ],
        'new-cap': 1,
        'guard-for-in': 2,
        'no-bitwise': 2,
        'no-caller': 2,
        'no-cond-assign': [
            2,
            'except-parens'
        ],
        'no-debugger': 2,
        'space-before-function-paren': 0,
        'no-empty': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-irregular-whitespace': 2,
        'no-iterator': 2,
        'no-loop-func': 2,
        'no-multi-str': 2,
        'no-new': 2,
        'no-proto': 2,
        'no-script-url': 2,
        'no-sequences': 2,
        'no-undef': 2,
        'no-shadow': 0,
        'no-unused-vars': [2, { 'vars': 'all', 'varsIgnorePattern': '[$rootScope]' }],
        'no-with': 2,
        'vars-on-top': 1,
        'no-inner-declarations': 1,
        'object-curly-spacing': [2, 'always'],
        'quotes': [
            2,
            'single'
        ],
        'semi': [
            2,
            'always'
        ],
        'valid-typeof': 2,
        'wrap-iife': [
            2,
            'inside'
        ]
    },
    'globals': {
        'define': false,
        'require': true,
        'exports': false,
        'module': false,
        'describe': false,
        'before': false,
        'beforeEach': false,
        'after': false,
        'afterEach': false,
        'it': false,
        'inject': false,
        'expect': false,
        'spyOn': false
    }
};
