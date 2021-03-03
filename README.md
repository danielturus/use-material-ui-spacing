# use-material-ui-spacing

[![npm version](https://img.shields.io/npm/v/use-material-ui-spacing.svg?style=flat-square)](https://www.npmjs.org/package/use-material-ui-spacing)

## Table of Contents

- [Installing](#installing)
- [Example](#example)
- [License](#license)

## Installing

Using npm:

```bash
$ npm install use-material-ui-spacing
```

Using yarn:

```bash
$ yarn add use-material-ui-spacing
```

## Example

### note: ES modules usage

In your React component:

```js
import { useSpacing } from 'use-material-ui-spacing'

function Button({ children }) {
  const [px2, py1, mt3, m4] = useSpacing('px2', 'py1', 'mt3', 'm4')

  return <button className={(px2, py1, mt3, m4)}>{children}</button>
}
```
