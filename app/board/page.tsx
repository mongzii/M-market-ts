import { connectDB } from "@/util/database";
import BoardItem from "./BoardItem";
import { ObjectId } from "mongodb";

export interface IboardItem {
  _id: ObjectId;
  title: string;
  content: string;
  author?: string;
}
export interface BoardProps {
  data: IboardItem[];
}

export default async function Qa() {
  const client = await connectDB;
  const db = client.db("market");
  const data: IboardItem[] | null = await db
    .collection<IboardItem>("post")
    .find()
    .toArray();

  return (
    <div className="list-bg">
      <BoardItem data={data} />
      {/* <BoardItem /> */}
      {/* <DetailLink /> */}
    </div>
  );
}
