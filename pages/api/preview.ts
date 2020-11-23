// Packages
import { NextApiRequest, NextApiResponse } from 'next';

// Helpers
import { getNotion } from '@lib/utils/notion';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.token !== process.env.NOTION_TOKEN) {
    return res.status(404).json({ message: 'no_authorized' });
  }
  const postTable = await getNotion();
  if (!postTable) {
    return res.status(401).json({ message: 'Failed fetch posts' });
  }
  res.setPreviewData({});
  res.redirect('/blog');
}

export default handler;
