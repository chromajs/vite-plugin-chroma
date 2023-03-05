import { json } from "stream/consumers";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
<chroma>
  # Chroma

  This is an example of a Chroma app built with Vite. To learn more, check out the <a href="https://github.com/chromajs/">docs</a>.
</chroma>
</div>
`;
