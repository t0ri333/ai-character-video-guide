// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    gfm: true,
  },
});
