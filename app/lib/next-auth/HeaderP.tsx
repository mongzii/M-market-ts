"use client";
import { useSession } from "next-auth/react";

export default function HeaderP() {
  const { data: session, status } = useSession();
  //console.log(status);
  return (
    <div>
      {/* <h2>{session?.user?.name}</h2> */}
      {/* <h2>
        {status === "authenticated" ? <p>안녕하세요</p> : <p>로그인하세요</p>}
      </h2> */}
      <h2>
        {status === "loading" ? (
          <p>Loading</p>
        ) : status === "authenticated" ? (
          <p>{session?.user?.name}님</p>
        ) : (
          <p>로그인하세요</p>
        )}
      </h2>
    </div>
  );
}

//loading이면 loading
//authenticated이면 안녕하세요
//아니면 로그인하세요
