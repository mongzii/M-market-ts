import LoginBtn from "../LoginBtn";
import HeaderP from "../lib/next-auth/HeaderP";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h2>LOGIN</h2>
      {/* //로그인정보 확인하는거 */}

      {/* <HeaderP /> */}
      {/* //로그인하는거 */}
      <LoginBtn />
      <Link href="/member">회원가입</Link>
    </div>
  );
}
