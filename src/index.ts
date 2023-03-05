import parse from "./parse";

const chromaFileRegex = /\.ts|\.tsx|\.html|\.svelte|\.js|\.jsx|\.vue/i;

export default function plugin() {
  return {
    name: "vite-plugin-svelte-chroma",

    transform(src: string, id: string) {
      if (chromaFileRegex.test(id)) {
        return {
          code: parse(src),
          map: null,
        };
      }

      return src;
    },
  };
}
