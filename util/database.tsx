import { MongoClient, MongoClientOptions } from "mongodb";
const url =
  "mongodb+srv://mongzii228:qwer1234@cluster0.m8aww3r.mongodb.net/?retryWrites=true&w=majority";
//const options: MongoClientOptions = { useNewUrlParser: true };
//const options: MongoClientOptions = { useUnifiedTopology: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    // global._mongo = new MongoClient(url, options).connect();
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  //connectDB = new MongoClient(url, options).connect();
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
