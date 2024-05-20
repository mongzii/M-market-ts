"use client";

import { useRouter } from "next/navigation";

export default function WriteBtn() {
  let router = useRouter();
  return (
    <div className="qa-writebtn">
      <button
        onClick={() => {
          router.push("/board/write");
        }}
      >
        작성하기
      </button>
    </div>
  );
}
