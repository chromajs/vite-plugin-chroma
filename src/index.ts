const fileRegex = /\.(chroma)$/;

export default function myPlugin() {
  return {
    name: 'vite-plugin-svelte-chroma',

    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        return {
          code: src,
          map: null,
        };
      }
    },
  };
}
