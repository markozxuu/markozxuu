// Packages
import { NextApiRequest, NextApiResponse } from 'next';

// Data
import data from '@data/blog.json';

const hostname = 'https://markozxuu.now.sh';

interface Types {
  pathname: string;
  priority: number;
}

function getSitemap({ pathname, priority = 0.5 }: Types) {
  return `
      <url>
        <loc>${hostname}${pathname}</loc>
        <priority>${priority}</priority>
      </url>
    `;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = data.filter((post) => post.published === true);
  const entries = posts.map(({ slug }) =>
    getSitemap({
      pathname: `/${slug}`,
      priority: 0.8,
    })
  );
  entries.push(
    getSitemap({
      pathname: '/',
      priority: 1,
    })
  );
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${entries.join('\n')}
  </urlset> 
  `.trim();
  res.writeHead(200, { 'Content-Type': 'application/xml' });
  return res.end(sitemap);
}

export default handler;
