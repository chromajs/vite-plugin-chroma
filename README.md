# vite-plugin-chroma

A plugin to integrate Chroma with Vite. Chroma let's you write markdown syntax in between `<chroma></chroma>` tags in `.ts`, `.tsx`, `.html`, `.svelte`, `.js`, `.jsx`, and `.vue` and will compile it to HTML.

## Installation

To begin, scaffold a new Vite project and install chroma:

```shell
npm create vite
cd <app name>
npm install
npm install vite-plugin-chroma
```

Then, update your `vite.config.js` in the root directory:

ESModules:
```ts
import { defineConfig } from "vite";
import chroma from "vite-plugin-chroma";

export default defineConfig({
    ...
	plugins: [chroma()],
});
```

Common JS:
```js
const { defineConfig } = require("vite");
const chroma = require("vite-plugin-chroma");

export default defineConfig({
    ...
	plugins: [chroma()],
});
```