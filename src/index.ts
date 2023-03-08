import compile from "@chromajs/compiler";

function chroma() {
	return {
		name: "vite-plugin-chroma",

		transform(src: string, id: string) {
			if (/\.ts|\.tsx|\.html|\.svelte|\.js|\.jsx|\.vue/i.test(id)) {
				return {
					code: compile(src),
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
