import Link from "next/link";
import HeaderBtn from "./HeaderBtn";

export default function HeaderPart() {
  return (
    <div>
      <div className="headerpart">
        <div className="navmenu">
          <Link href="/" className="logo">
            Home
          </Link>
          <Link href="/list">List</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/board">Q&A</Link>
        </div>
        <HeaderBtn />
      </div>
    </div>
  );
}
