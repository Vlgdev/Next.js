import { NextApiRequest, NextApiResponse } from "next";

interface IdNextRequest extends NextApiRequest {
  query: {
    id: string
  }
}

export default function getById(req: IdNextRequest, res: NextApiResponse) {
  res.json({yourId: req.query.id})
}