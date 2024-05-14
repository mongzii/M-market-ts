"use client";

import { useState, useEffect } from "react";
import type { Iedit, IeditId } from "../../detail/[id]/page";

interface Icomment {
  _id: string;
  parent: string;
  author: string;
  content: string;
}

export default function Comment({ _id }: IeditId) {
  let [comment, setComment] = useState(""); //여기에 댓글쓴게 버튼누르면 db로 간다.
  let [list, setList] = useState<Icomment[]>([]); //여기에 댓글리스트들 담겨있음

  //서버에게 db에있는 댓글을 가져와달라고해야한다. => useEffect와 fetch이용
  useEffect(() => {
    fetch("/api/comment/list?id=" + _id)
      .then(r => r.json())
      .then(result => {
        //console.log(result);
        setList(result);
      });
  }, []);

  //console.log(list);
  return (
    <div>
      <hr />
      <h2>댓글</h2>

      {list.length > 0
        ? list.map((a, i) => {
            return (
              <div key={i}>
                <p>{a.content}</p>
              </div>
            );
          })
        : "댓글이 없습니다"}
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
    </div>
  );
}
