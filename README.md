# eslint-config-zanata

eslint configurations for linting of all Zanata's JavaScript code.

These are all based on [JavaScript Standard Style](http://standardjs.com/).

## Usage

Install this config and its dependencies:

```bash
npm install eslint eslint-config-zanata \
            eslint-config-standard \
            eslint-config-standard-react \
            eslint-config-standard-jsx \
            eslint-plugin-react \
            eslint-plugin-promise \
            babel-eslint
```


*Why all the dependencies?*
The dependencies must be directly in the project because eslint will not locate
them if they are nested within a shareable config.


then have your config extend it:


```yaml
# .eslintrc (yaml)

extends: zanata
```

```json
// .eslintrc (json)
{
  "extends": "zanata"
}
```

You can extend `zanata`, `zanata/react` or `zanata/angular`, then add any of
your own rules you need. See http://eslint.org/docs/user-guide/configuring.html

For projects in the Zanata organization, you should prefer requesting rules to
be added to these configs rather than adding custom rules per-project. This is
so that the style stays consistent between all our projects.


### Show linting in sublime text

Use SublimeLinter with its eslint plugin:

 - [install SublimeLinter](http://sublimelinter.readthedocs.org/en/latest/installation.html)
 - ensure eslint is installed according to the
   [SublimeLinter-eslint instructions](https://github.com/roadhump/SublimeLinter-eslint)
 - [install SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)

When you have followed the configuration instrcutions for SublimeLinter-eslint,
it should automatically locate .eslintrc files and lint files that you edit.

### Show linting in webstorm

Use the builtin [WebStorm ESLint tool](https://www.jetbrains.com/webstorm/help/eslint.html)

### Lint in gulp

Use [gulp-eslint](https://www.npmjs.com/package/gulp-eslint)

```bash
npm install gulp-eslint --save-dev
```

If you use `eslint()` with no arguments, it will resolve `.eslintrc` relative to
each file. To specify a config, supply it as a relative path.

e.g. `eslint('./.eslintrc')`


### Lint in webpack build

Use [eslint-loader](https://www.npmjs.com/package/eslint-loader):

```bash
npm install eslint-loader --save-dev
```


## Configurations

### Default

The base config. Like standardjs.com but with extra restrictions for line
length, only unix line endings, and restrictions on logging and use of undefined
variables.

```json
{
  "extends": "zanata"
}
```

### React

Adds babel parser and JSX support, and any react-specific checks that the team
have decided to use.

```json
{
  "extends": "zanata/react"
}
```

### Angular

Just adds angular as a global.

```json
{
  "extends": "zanata/angular"
}
```
