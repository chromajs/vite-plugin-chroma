# vite-plugin-svelte-chroma

A vite plugin that compiles HTML, Svelte, Vue, TSX, JSX, TS, JS.

## Usage

Installation:

```bash
npm install vite-plugin-svelte-chroma
```

Edit **vite.config.js**

```js
import { defineConfig } from "vite";
import chroma from "vite-plugin-svelte-chroma";

export default defineConfig({
    ...
	plugins: [chroma()],
});
```

## How does this work?

Chroma will convert all Markdown inside of `<chroma></chroma>` to HTML at build time using Vite. **CSS will affect your Markdown!**

Chroma will "compile" any files ending with the extensions `html`, `js`, `jsx`, `ts`, `tsx`, `svelte`, `vue`.
