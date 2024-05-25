"use client";
import LoginBtn from "@/app/LoginBtn";
import LogoutBtn from "@/app/LogoutBtn";
import SignupBtn from "@/app/SignupBtn";
import { useSession } from "next-auth/react";

export default function HeaderP() {
  const { data: session, status } = useSession();

  //console.log(status);
  return (
    <div>
      <h2>
        {status === "loading" ? (
          <p>Loading</p>
        ) : status === "authenticated" ? (
          <div className="auth">
            <p>{session?.user?.name}님</p>
            <LogoutBtn />
          </div>
        ) : (
          <div className="auth">
            <LoginBtn />
            <SignupBtn />
          </div>
        )}
      </h2>
    </div>
  );
}
