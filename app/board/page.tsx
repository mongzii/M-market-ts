import { connectDB } from "@/util/database";

export default async function Qa() {
  const client = await connectDB;
  const db = client.db("market");
  const data = await db.collection("post").find().toArray();
  //console.log(data);
}
