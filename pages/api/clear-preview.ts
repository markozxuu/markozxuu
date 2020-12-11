// Packages
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  return res.redirect('/blog');
}

export default handler;
