eslint-config-simbo
===================

  > Simbo's [ESLint](http://eslint.org/) config…

[![npm Package Version](https://img.shields.io/npm/v/eslint-config-simbo.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-simbo)
[![MIT License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://simbo.mit-license.org)
[![Travis Build Status](https://img.shields.io/travis/simbo/eslint-config-simbo/master.svg?style=flat-square)](https://travis-ci.org/simbo/eslint-config-simbo)

---

## Usage

Install via npm:

``` bash
npm i eslint-config-simbo
```

Add an extension point to your ESLint config, i.e. `.eslintrc`:

``` json
{
    "extends": "simbo/node"
}
```

All extension points extend the default config which has `root: true`
(see [ESLint Docs](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)).


## Extension points

  - `simbo/default` → base config, no environments
  - `simbo/default/es6` → es6 support
  - `simbo/default/node` → node env
  - `simbo/default/node/es6` → node env with ES6 support
  - `simbo/default/browser` → browser env
  - `simbo/default/browser/es6` → browser env with ES6 support


### Aliases

  - `simbo` → `simbo/default`
  - `simbo/es6` → `simbo/default/es6`
  - `simbo/node` → `simbo/default/node`
  - `simbo/node/es6` → `simbo/default/node/es6`
  - `simbo/browser` → `simbo/default/browser`
  - `simbo/browser/es6` → `simbo/default/browser/es6`


## License

[MIT &copy; Simon Lepel 2015](http://simbo.mit-license.org/)
