"use client";

import type { IboardItem, BoardProps } from "../board/page";
import Link from "next/link";
import WriteBtn from "./WriteBtn";
import axios from "axios";

export default function BoardItem({ data }: BoardProps) {
  return (
    <div className="board-body">
      <h2>Q & A</h2>
      <WriteBtn />
      {data.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/` + data[i]._id}>
              <h4> {data[i].title}</h4>
            </Link>
            <p>{data[i].content}</p>
            <div className="board-btn">
              <Link href={`/board/edit/` + data[i]._id}>수정</Link>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  axios
                    .delete("/api/post/delete", {
                      data: data[i]._id,
                    })
                    .then(() => {
                      const parentElement = e.currentTarget
                        .parentElement as HTMLElement;
                      parentElement.style.opacity = "0";
                      setTimeout(() => {
                        parentElement.style.display = "none";
                      }, 1000);
                    })
                    .catch(err => console.error(err));
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
