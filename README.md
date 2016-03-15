## Usage

First check what `npm version` do you have. `npm -v` in the console.

If you are using `npm v3` you need to install `peerDependencies` manually.

- `npm install --save-dev eslint eslint-config-yandex estraverse-fb flexshopper/eslint-config`

If you are using `npm v2` `peerDependencies` will be installed automatically

- Then, extend the config in the `.eslintrc` file

### ES5 Projects
```
{
    "extends": "flexshopper"
}
```
### ES6 Projects
```
{
    "extends": "flexshopper/es6"
}
```
### Angular ES2015 projects
```
{
    "extends": "flexshopper/angular"
}
```
