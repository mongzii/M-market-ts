import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("내용을 다시 확인하세요");
    }
    if (session) {
      req.body.author = session?.user?.email;
      const client = await connectDB;
      const db = client.db("market");
      const data = await db.collection("post").insertOne(req.body);
      //return 응답.status(200).json("저장완료");
      return res.redirect(302, "/board");
    } else {
      // const client = await connectDB;
      // const db = client.db("market");
      // const data = await db.collection("post").insertOne(요청.body);
      // //return 응답.status(200).json("저장완료");
      // return 응답.redirect(302, "/board");
      return res.status(500).json("로그인 먼저 하세요");
    }
  }
}
