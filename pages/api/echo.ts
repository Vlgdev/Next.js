import { NextApiRequest, NextApiResponse } from "next"

interface EchoNextRequest extends NextApiRequest {
  query: {
    message: string
  }
}

export default function echo(req: EchoNextRequest, res: NextApiResponse) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    message: req.query.message ?? 'Base message'
  }))
}