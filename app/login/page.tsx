import GoogleLoginBtn from "../GoogleLoginBtn";
import Test from "../lib/next-auth/Test";

export default function Login() {
  return (
    <div>
      <Test />
      <GoogleLoginBtn />
    </div>
  );
}
