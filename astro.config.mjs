// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://t0ri333.github.io/ai-character-video-guide/',
  markdown: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    gfm: true,
  },
});
