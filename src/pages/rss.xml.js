import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'WriteNow.Media — Notes',
    description: 'Notes on research, writing craft, and stories from the archive.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.excerpt,
      link: `/blog/${p.id}/`,
    })),
  });
}
