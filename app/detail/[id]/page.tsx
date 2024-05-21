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
    <div className="detail-body">
      <h1>상세페이지</h1>
      <div className="detail-main">
        <div>제목</div>
        <h3>{result?.title}</h3>
      </div>
      <div className="detail-main">
        <div>내용</div>
        <h3>{result?.content}</h3>
      </div>
      <Comment _id={_id} />
    </div>
  );
}
