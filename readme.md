# esm-select-url-switch

A simple Webpack suitable ES Module which will load a new page when a targeted select changes.

This ES Module will:

- loop over all the selectors with `document.querySelectorAll(selector)`
- Add a change event to each select
- If select changes, it will load a new page with the chosen `option`'s value

## Usage

```bash
npm i esm-select-url-switch
```

In your entry point:

```js
import selectUrlSwitch from 'esm-select-url-switch';
selectUrlSwitch('.js-select-url-switch');
```

Lastly, you will likely need to alter your webpack config. Most setups by default will not minify any ES6 code from `node_modules` so we need to make an exception for this ES6 package. Also you may as well lint it, you can't rely on a random person from the internet to make things the best way, right?

In your config where you load `.js` files:

```js
{
  test: /\.js$/,
  include: [
    path.resolve(__dirname, paths.src.js),
    path.resolve(__dirname, paths.src.entries),
  ],
  exclude: /node_modules(?!\/esm\-)/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime'
    ],
  },
},
{
  test: /\.js$/,
  exclude: /node_modules(?!\/esm\-)/,
  loader: 'eslint-loader',
},
```
