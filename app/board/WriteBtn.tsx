"use client";

import { useRouter } from "next/navigation";

export default function WriteBtn() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/board/write");
      }}
    >
      작성하기
    </button>
  );
}
