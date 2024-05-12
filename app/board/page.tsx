import { connectDB } from "@/util/database";
import BoardItem from "./BoardItem";
import { useState, useEffect } from "react";
import { ObjectId } from "mongodb";

interface IboardItem {
  _id: ObjectId;
  title: string;
  content: string;
  author?: string;
}
interface BoardProps {
  data: IboardItem[];
}

export default async function Qa() {
  const client = await connectDB;
  const db = client.db("market");
  const data: BoardProps | null = await db
    .collection<BoardProps>("post")
    .find()
    .toArray();

  //console.log(data);
  // const data = rawData.map((item: any) => ({
  //   _id: item._id.toString(),
  //   title: item.title,
  //   content: item.content,
  //   author: item.author,
  // }));
  // console.log(data);

  return (
    <div className="list-bg">
      <BoardItem data={data} />
      {/* <BoardItem /> */}
      {/* <DetailLink /> */}
    </div>
  );
}
