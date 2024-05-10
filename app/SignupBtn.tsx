"use client";

import { useRouter } from "next/navigation";

export default function SignupBtn() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/member");
      }}
    >
      회원가입
    </button>
  );
}
