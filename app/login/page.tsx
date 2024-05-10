import GoogleLoginBtn from "../GoogleLoginBtn";
import Test from "../lib/next-auth/Test";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h2>LOGIN</h2>
      <Test />
      <GoogleLoginBtn />
      <Link href="/member">회원가입</Link>
    </div>
  );
}
