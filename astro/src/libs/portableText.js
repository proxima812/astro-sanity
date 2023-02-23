import { portableTextToHtml } from "astro-sanity";
import { urlForImage } from "./urlForImage";

const customComponents = {
 types: {
  // image: ({ value }) => {
  //  return `
  //       <picture>
  //         <source
  //           srcset="${urlForImage(value.asset).format("webp").url()}"
  //           type="image/webp"
  //         />
  //         <img
  //           class="responsive__img"
  //           src="${urlForImage(value.asset).url()}"
  //           alt="${value.alt}"
  //         />
  //       </picture>
  //     `;
  // },
  image: ({ value }) =>
   `<img src="${urlForImage(
    value
   ).url()}" class="max-w-[100%] mx-auto max-h-[800px] object-contain md:object-cover rounded-[20px] mb-[16px]" />`,
  // code: ({ value }) => `<pre><code>${value.code}</code></pre>`,
 },
};

export function sanityPortableText(portabletext) {
 return portableTextToHtml(portabletext, customComponents);
}
