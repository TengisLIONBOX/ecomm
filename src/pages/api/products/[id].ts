import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/data/product-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  res.json({ id });
}
