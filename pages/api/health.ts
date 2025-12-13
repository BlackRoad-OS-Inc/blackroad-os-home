import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: 'ok',
    service: 'blackroad-os-home',
    timestamp: new Date().toISOString(),
  });
}
