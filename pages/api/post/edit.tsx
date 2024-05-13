import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    //console.log(req.body);
    //console.log(요청.body);
    //DB에 있는 데이터를 수정하라.
    const client = await connectDB;
    const db = client.db("market");
    let result = await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(req.body._id) },
        { $set: { title: req.body.title, content: req.body.content } }
      );
    res.redirect(302, "/board");
  }
}
