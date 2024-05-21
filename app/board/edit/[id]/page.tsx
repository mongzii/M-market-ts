import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export interface Iprops {
  params: {
    id: ObjectId;
  };
  searchParms: {};
}
export interface Iresult {
  _id: ObjectId;
  title: string;
  content: string;
  author?: string;
}
export interface IIresult {
  result: Iresult | null;
}

export default async function Edit(props: any) {
  //console.log(props);
  const client = await connectDB;
  const db = client.db("market");
  let result: Iresult | null = await db
    .collection<Iresult>("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="qa-write">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST" className="qa-form">
        <input name="title" defaultValue={result?.title} />
        <input name="content" defaultValue={result?.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result?._id.toString()}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
