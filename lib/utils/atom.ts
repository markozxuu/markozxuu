// Native
import fs from 'fs/promises';

// Packages
import RSS from 'rss';

// Data
import * as data from '@data/blog.json';

async function generateRSS() {
  const feed = new RSS({
    title: 'Markoz Pena',
    site_url: 'https://markozxuu.now.sh',
    feed_url: 'https://markozxuu.now.sh/atom.xml',
  });

  const posts = data.filter((post) => Boolean(post.published));
  const sortPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  sortPosts.map((post) => {
    const { title, description, date, slug, author } = post;
    feed.item({
      title,
      description,
      date,
      url: `/blog/${slug}`,
      author,
    });
  });
  await fs.writeFile('./public/atom.xml', feed.xml({ indent: true }));
}

export { generateRSS };
