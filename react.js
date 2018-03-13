'use strict';

const base = require('./index');

module.exports = Object.assign({}, base, {
    plugins: ['promise', 'react'],
    extends: ['airbnb', 'plugin:promise/recommended'],
});
