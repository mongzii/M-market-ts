"use client";

import HeaderP from "./lib/next-auth/HeaderP";
import { SessionProvider } from "next-auth/react";

export default function HeaderBtn() {
  return (
    <div>
      <SessionProvider>
        <HeaderP />
      </SessionProvider>
    </div>
  );
}
