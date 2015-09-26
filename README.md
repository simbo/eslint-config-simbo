eslint-config-simbo
===================

  > Simbo's ESLint config…


## Usage

Install via npm:

``` bash
npm i eslint-config-simbo
```

In your `.eslintrc`:

``` json
{
    "extends": "simbo/node"
}
```

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
