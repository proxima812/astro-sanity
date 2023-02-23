import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
 site: 'https://proxima.netlify.app',
 integrations: [
  mdx(),
  sitemap(),
  tailwind(),
  sanity({
   projectId: "dr4qv25t",
   dataset: "production",
   apiVersion: "2021-03-25",
   useCdn: true,
  }),
 ],
});
