import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log(req.query.id);
  const client = await connectDB;
  const db = client.db("market");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.query.id as string) })
    // .find({ parent: new ObjectId("65699478e619dc02d6af6819") })
    // .find({ _id: new ObjectId(req.body) })
    .toArray();

  //console.log(result);
  res.status(200).json(result);
}
