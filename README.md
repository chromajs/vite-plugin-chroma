# vite-plugin-chroma

A Vite plugin that compiles HTML, Svelte, Vue, TSX, JSX, TS, JS.

## Usage

Installation:

```bash
npm install vite-plugin-svelte-chroma
```

Edit **vite.config.js**

ESModules:
```ts
import { defineConfig } from "vite";
import chroma from "vite-plugin-svelte-chroma";

export default defineConfig({
    ...
	plugins: [chroma()],
});
```

Common JS:
```js
const { defineConfig } = require("vite");
const chroma = require("vite-plugin-svelte-chroma");

export default defineConfig({
    ...
	plugins: [chroma()],
});
```

## How does this work?

Chroma will convert all Markdown inside of `<chroma></chroma>` to HTML at build time using Vite. **CSS will affect your Markdown!**

Chroma will "compile" any files ending with the extensions `html`, `js`, `jsx`, `ts`, `tsx`, `svelte`, `vue`.
