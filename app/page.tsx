import Image from "next/image";
import { connectDB } from "@/util/database";
import Slide from "./Slide";

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db("market");
  // const data = await db.collection("post").find().toArray();
  // console.log(data);

  return (
    <div>
      <h1 className="title">M-market</h1>
      <div className="main">
        <Slide />
        <div className="main-middle">
          <img src="/mainbt2.jpg" />
          <img src="/mainbt3.jpg" />
          <img src="/mainbt5.jpg" />
        </div>
        <div className="main-bottom">
          <img src="/mainbt4.jpg" />
        </div>
      </div>
    </div>
  );
}
