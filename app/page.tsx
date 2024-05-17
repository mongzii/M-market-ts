import Image from "next/image";
import { connectDB } from "@/util/database";
import Slide from "./Slide";

export default async function Home() {
  return (
    <div className="mainbody">
      <h1 className="title">M-market</h1>
      <div className="main">
        <Slide />
        <div className="main-middle">
          <div className="middle1">
            <img src="/mainbt2.jpg" />
          </div>
          <div className="middle2">
            <img src="/mainbt3.jpg" />
          </div>
          <div className="middle3">
            <img src="/mainbt5.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
