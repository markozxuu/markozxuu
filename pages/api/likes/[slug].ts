import { NextApiRequest, NextApiResponse } from 'next';
import { PSDB } from 'planetscale-node';

// Native
import { createHash } from 'crypto';

import { IP_ADDRESS_SALT } from '@lib/utils/const';

const conn = new PSDB('main');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { slug },
    body: { likes },
  } = req;

  const postId = slug;

  // Fallback for localhost or non Vercel deployments
  const ipAdress = req.headers['x-forwarded-for'] ?? '0.0.0.0';

  // The IP should be store with a hash in the DB
  // this with the intention of protect their privacy
  const ipHash = createHash('md5')
    .update(ipAdress + IP_ADDRESS_SALT!, 'utf8')
    .digest('hex');

  const userId = ipHash.slice(0, 8);

  switch (method) {
    case 'POST':
      if (likes === 1) {
        await conn.query(
          `
           insert into posts(userId, slug, numberLikes) values('${userId}', '${postId}', '${likes}')
          `,
          null
        );
        return res.status(201).json({ slug, userId, likes });
      }
      if (likes > 1) {
        await conn.query(
          `update posts set numberLikes=numberLikes + 1 where slug='${postId}' and (userId='${userId}');`,
          null
        );
        return res.status(201).json({ slug, userId, likes });
      }
      break;
    case 'GET':
      const [amountLikePost] = await conn.query(
        `select numberLikes from posts where userId='${userId}' and slug='${postId}';`,
        null
      );
      const [totalLikes] = await conn.query(
        `select sum(numberLikes) from posts where slug='${slug}'`,
        null
      );
      const totalLikesFromPost =
        // Is necessary to convert to "Number" type
        // otherwise it cause side effects to moment
        // of increment the value
        Number(totalLikes[0]?.['sum(numberLikes)']) ?? 0;
      const currentLikes = amountLikePost[0]?.numberLikes ?? 0;
      return res.json({ currentLikes, totalLikesFromPost });
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({
        error: {
          message: `Method ${req.method} Not Allowed`,
          code: `method_not_allowed`,
        },
      });
  }
}

export default handler;
