import { marked } from "marked";
import dompurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const purify = dompurify(window as unknown as Window);

const chromaRegex = /<chroma>([^]*?)<\/chroma>/gi;

export default function parse(src: string): string {
  const code = [...src.matchAll(chromaRegex)];

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
