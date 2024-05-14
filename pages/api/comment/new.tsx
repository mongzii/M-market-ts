import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //유저이메일받아와야해서 getServerSession이용해야함
  let session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    // console.log(req.body);
    // // console.log(session);
    req.body = JSON.parse(req.body);
    let 저장할데이터형태 = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id), //부모게시물의 id
      author: session?.user?.email, // if문 써서 session 없으면 로그인후 이용하게 짜기
    };
    //  console.log(저장할데이터형태);

    const client = await connectDB;
    const db = client.db("market");
    let result = await db.collection("comment").insertOne(저장할데이터형태);
    res.status(200).json("저장완료");
    //console.log(result);
  }
}
