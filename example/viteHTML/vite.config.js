import { defineConfig } from "vite";
import chroma from "vite-plugin-chroma";

export default defineConfig({
	plugins: [chroma()],
});
