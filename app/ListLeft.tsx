"use client";

//list페이지에서 왼쪽카테고리부분

import { useRouter } from "next/navigation";

export default function ListLeft() {
  let router = useRouter();
  return (
    <div>
      <li
        onClick={() => {
          router.push("/list");
        }}
      >
        All
      </li>
      <li
        onClick={() => {
          router.push("/list/jacket");
        }}
      >
        Jacket
      </li>
      <li
        onClick={() => {
          router.push("/list/shoe");
        }}
      >
        Shoe
      </li>
    </div>
  );
}
