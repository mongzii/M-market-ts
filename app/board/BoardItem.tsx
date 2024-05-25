"use client";

import type { IboardItem, BoardProps } from "../board/page";
import Link from "next/link";
import WriteBtn from "./WriteBtn";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function BoardItem({ data }: BoardProps) {
  const { data: session, status } = useSession();
  // console.log(session?.user?.name);
  // console.log(data);
  return (
    <div className="board-body">
      {status === "unauthenticated" ? (
        <h1 className="login-yesno">로그인 먼저하세요</h1>
      ) : (
        <div>
          <h2>Q & A</h2>
          <WriteBtn />
          {data.map((a, i) => {
            return (
              <div className="list-item" key={i}>
                <Link href={`/detail/` + data[i]._id}>
                  <h4> {data[i].title}</h4>
                </Link>
                <p>{data[i].content}</p>

                {/* //이름이 같으면 수정이 보이고 아니면 안보이게 */}
                {/* //세션이름이랑 data에 있는 author이랑 같으면 */}
                {session?.user?.email === data[i].author ? (
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
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
