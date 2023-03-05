import { marked } from "marked";
import { JSDOM } from "jsdom";
import dompurify from "dompurify";

const window = new JSDOM("").window;
const purify = dompurify(window as unknown as Window);

function parse(src: string): string {
	const code = [...src.matchAll(/<chroma>([^]*?)<\/chroma>/gi)];

	code.map((chromaReg) => {
		const chromaString = chromaReg[0];

		while (src.indexOf(chromaString) !== -1) {
			const noTag = chromaString
				.replace(/<chroma>/gi, "")
				.replace(/<\/chroma>/gi, "")
				.replace(/\t/g, "");

			src = src.replace(
				chromaString,
				purify.sanitize(marked(noTag, { async: false }))
			);
		}
	});

	return src;
}

function chroma() {
	return {
		name: "vite-plugin-svelte-chroma",

		transform(src: string, id: string) {
			if (/\.ts|\.tsx|\.html|\.svelte|\.js|\.jsx|\.vue/i.test(id)) {
				return {
					code: parse(src),
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
