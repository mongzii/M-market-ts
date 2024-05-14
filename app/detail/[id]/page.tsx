//게시판내용 제목누르면 뜨는 상세페이지

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export interface Iedit {
  _id: ObjectId;
  title: string;
  content: string;
  author?: string;
}
export interface IeditId {
  _id: string | undefined;
}

export default async function Detail(props: any) {
  const client = await connectDB;
  const db = client.db("market");
  const result: Iedit | null = await db
    .collection<Iedit>("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  //console.log(result?._id);
  const _id = result?._id.toString();
  //console.log(props.params.id);

  return (
    <div>
      <h2>상세페이지</h2>
      {/* <h4>글제목</h4>
      <p>글내용</p> */}
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
      <Comment _id={_id} />
    </div>
  );
}
