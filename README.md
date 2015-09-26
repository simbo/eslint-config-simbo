eslint-config-simbo
===================

  > Simbo's ESLint config.


## Usage

Install via npm:

``` bash
npm i eslint-config-simbo
```

In your `.eslintrc`:

``` json
{
    "extends": "simbo"
}
```

## Extension points

  - `simbo/default` → base config, no environments
  - `simbo/default/es6` → es6 support
  - `simbo/default/node` → node env
  - `simbo/default/node/es6` → node env with ES6 support
  - `simbo/default/browser` → browser env
  - `simbo/default/browser/es6` → browser env with ES6 support


## License

[MIT &copy; Simon Lepel 2015](http://simbo.mit-license.org/)
