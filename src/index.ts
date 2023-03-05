import compile from "chroma-compiler";

function chroma(tabSize?: number) {
	return {
		name: "vite-plugin-svelte-chroma",

		transform(src: string, id: string) {
			if (/\.ts|\.tsx|\.html|\.svelte|\.js|\.jsx|\.vue/i.test(id)) {
				return {
					code: compile(src, tabSize ? tabSize : 4),
					map: null,
				};
			}

			return {
				code: src,
				map: null,
			};
		},
	};
}

exports.default = chroma;
export = chroma;
