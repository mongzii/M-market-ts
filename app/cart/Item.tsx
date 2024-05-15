"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
// import { addcart, deletecart, countUp, countDown } from "../../redux/cartSlice";
import { countUp } from "../../redux/cartSlice";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Item() {
  let router = useRouter();
  //const Item = useSelector(state => state);
  //const item = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch();
  // console.log(Item);

  return (
    <div>
      안뇽
      <h2 className="title-cart">장바구니</h2>
      {/* <button onClick={() => dispatch(countUp())}>+</button> */}
      <button>+</button>
    </div>
  );
}
