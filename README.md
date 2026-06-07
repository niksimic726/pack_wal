# danimonster

A tiny npm package that exports a `greet` helper.

## Install

```sh
npm install danimonster
```

## Usage

```js
import { greet } from "danimonster";

console.log(greet("Codex"));
// Hello, Codex!
```

## Development

```sh
npm test
```

## Publishing (CI)

This repository includes a GitHub Actions workflow to publish when you push a tag like `v1.0.1`.

Steps to enable CI publishing:

1. Create an automation token on https://www.npmjs.com/ (Profile → Access Tokens). Grant publish rights and enable "bypass 2FA" for CI.
2. In the GitHub repository, add a secret named `NPM_TOKEN` with the token value.
3. Create a tag and push it to trigger the workflow:

```sh
git tag v1.0.0
git push --tags
```

Alternatively you can publish locally after logging in:

```sh
npm login
npm publish --access public
```
