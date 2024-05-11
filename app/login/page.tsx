import GoogleLoginBtn from "../GoogleLoginBtn";
import HeaderP from "../lib/next-auth/HeaderP";
// import Test from "../lib/next-auth/Test";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h2>LOGIN</h2>
      {/* //로그인정보 확인하는거 */}

      {/* <HeaderP /> */}
      {/* //로그인하는거 */}
      <GoogleLoginBtn />
      <Link href="/member">회원가입</Link>
    </div>
  );
}
