"use client";

import { ObjectId } from "mongodb";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IboardItem {
  _id: string;
  title: string;
  content: string;
  author?: string;
}
interface BoardProps {
  data: IboardItem[];
}

export default function BoardItem({ data }: BoardProps) {
  //  const [post, setPost] = useState<IboardItem[]>([]);

  //   useEffect(() => {
  //     data.then(res => setPost(res)).catch(error => console.log(error));
  //   }, [data]);

  //   console.log(post);
  // console.log(data);
  // ---------------------------------------
  // const promiseTest = (data: any) =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (data) {
  //         resolve("ok?");
  //         console.log(data);
  //       } else {
  //         reject("nn?");
  //       }
  //     }, 1000);
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  return (
    <div>
      <h2>Q & A</h2>
      {/* <button onClick={data => promiseTest(data)}></button> */}
      {data[0].content}
    </div>
  );
}

// export default function BoardItem({ data }: BoardProps) {
//   //   useEffect(() => {
//   //     data.then(res => {
//   //       console.log(res);
//   //     });
//   //   }, [data]);

//   return (
//     <div>
//       <h2>Q & A</h2>
//     </div>
//   );
// }

// export default function BoardItem() {
//   return (
//     <div>
//       <h2>Q & A</h2>
//     </div>
//   );
// }
