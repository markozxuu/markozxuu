// Packages
import { NextApiRequest, NextApiResponse } from 'next';

// Lib
import db from '@lib/firebase';

type NextApiRequestWithQuery = NextApiRequest & {
  query: {
    slug: string;
  };
};

async function handler(req: NextApiRequestWithQuery, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { slug } = req.query;
    const ref = db.ref('views').child(slug);
    const { snapshot } = await ref.transaction((currentValue) => {
      if (currentValue === null) {
        return 1;
      }
      return currentValue + 1;
    });
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }

  if (req.method === 'GET') {
    const { slug } = req.query;
    const snapshot = await db.ref('views').child(slug).once('value');
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
}

export default handler;
