# eslint-config-zanata

eslint configurations for linting of all Zanata's JavaScript code

## Usage

Install this config:

```bash
npm install eslint-config-zanata --save-dev
```

then have your config extend it:


```yaml
# .eslintrc (yaml)

extends: zanata
```

```json
# .eslintrc (json)
{
  "extends": "zanata"
}
```

You can extend `zanata`, `zanata/react` or `zanata/angular`, then add any of
your own rules you need. See http://eslint.org/docs/user-guide/configuring.html

For projects in the Zanata organization, you should prefer requesting rules to
be added to these configs rather than adding custom rules per-project. This is
so that the style stays consistent between all our projects.

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

This needs the babel-eslint parser

```bash
npm install --save-dev babel-eslint
```

### Angular

Just adds angular as a global.

```json
{
"extends": "zanata/angular"
}
```