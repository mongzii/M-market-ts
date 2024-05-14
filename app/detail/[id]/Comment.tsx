"use client";

//import { ObjectId } from "mongodb";
import { useState, useEffect } from "react";
import type { Iedit, IeditId } from "../../detail/[id]/page";

export default function Comment({ _id }: IeditId) {
  let [comment, setComment] = useState(""); //여기에 댓글쓴게 버튼누르면 db로 간다.
  let [list, setList] = useState([]); //여기에 댓글리스트들 담겨있음
  //근데 이 list는 어디서 가져오는거지?

  // useEffect(() => {
  //   fetch("/api/comment/list?id=" + _id)
  //     .then(r => r.json())
  //     .then(result => {
  //       // console.log(result);
  //       setList(result);
  //     });
  // }, []);

  //console.log(list);
  return (
    <div>
      <hr />
      <h2>댓글</h2>

      {/* <div>댓글목록보여줄부분</div> */}
      {/* {list.length > 0
        ? list.map((a, i) => {
            return <p key={i}>{a.content}</p>;
          })
        : "댓글이 없습니다"} */}
      <input
        onChange={e => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: _id }),
          });
        }}
      >
        댓글전송
      </button>
      {/* 여기서 전송된 데이터를 가져온게 list다 */}
      {/* <div>{console.log(_id)}</div> */}
    </div>
  );
}
