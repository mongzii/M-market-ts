import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handle(req: any, res: any) {
  if (req.method === "POST") {
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.password === ""
    ) {
      return res.status(500).json("내용을 다 기입해주세요");
    }
    //console.log(요청.body);
    //빈칸아니면 중복된 이메일인지 체크하자
    //일단 db에서 email을 찾자
    const client2 = await connectDB;
    const db2 = client2.db("market");
    let emailsearch = await db2
      .collection("user_cred")
      .findOne({ email: req.body.email });
    //console.log(emailsearch); //이게 있으면 중복인거다.
    //저게 있으면 중복가입은 안됩니다라고 나오게
    if (!emailsearch) {
      //해시함수
      // let hash = await bcrypt.hash(req.body.password, 10);
      // //console.log(hash)
      // req.body.password = hash;
      const client = await connectDB;
      const db = client.db("market");
      await db.collection("user_cred").insertOne(req.body);
      res.redirect(302, "/");
      //console.log(req.body);
    } else {
      return res.status(500).json("중복가입은 안됩니다!!!!");
    }
  }
}
