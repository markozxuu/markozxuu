// Packages
import { NextApiRequest, NextApiResponse } from 'next';

// Utils
import { getPostList } from '@lib/utils/notion';
import { TOKEN } from '@lib/utils/const';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.token !== 'string') {
    return res.status(401).json({
      error: {
        code: 'invalid_token',
        message: 'Invalid token',
      },
    });
  }

  if (req.query.token !== TOKEN) {
    return res.status(401).json({
      error: {
        code: 'no_authorized',
        message: 'No authorized',
      },
    });
  }

  const postTable = await getPostList();

  if (!postTable) {
    return res.status(404).json({
      error: {
        code: 'not_found',
        message: 'Failed fetch posts',
      },
    });
  }

  res.setPreviewData({});
  res.redirect('/blog');
}

export default handler;
