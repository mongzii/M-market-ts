"use client";

import { signIn } from "next-auth/react";

export default function GoogleLoginBtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      구글로그인
    </button>
  );
}
