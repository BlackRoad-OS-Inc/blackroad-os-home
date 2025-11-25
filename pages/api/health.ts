import type { NextApiRequest, NextApiResponse } from 'next'

interface HealthResponse {
  status: string
  service: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  res.status(200).json({
    status: 'ok',
    service: process.env.SERVICE_NAME || 'blackroad-os-home'
  })
}
