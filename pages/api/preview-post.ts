// Packages
import { NextApiRequest, NextApiResponse } from 'next';

// Utils
import { getBlogIndex } from '@lib/utils/notion';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.slug !== 'string') {
    return res.status(401).json({
      error: {
        code: 'invalid_slug',
        message: 'Invalid slug',
      },
    });
  }

  if (req.query.token !== process.env.TOKEN) {
    return res.status(401).json({
      error: {
        code: 'no_authorized',
        message: 'No authorized',
      },
    });
  }

  const postTable = await getBlogIndex(req.query.slug);
  const post = postTable[0]?.Slug[0] ?? '';

  if (!post) {
    return res.status(404).json({
      error: {
        code: 'not_found',
        message: `No post found for ${req.query.slug}`,
      },
    });
  }

  res.setPreviewData({});
  return res.redirect(`/blog/${post}`);
}

export default handler;
