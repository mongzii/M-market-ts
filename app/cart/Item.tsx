"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { countUp } from "../../redux/cartSlice";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import type { Icart } from "../../redux/cartSlice";

interface Irawdata {
  cartState: Icart[];
}

export default function Item() {
  let router = useRouter();
  const Item: Icart[] = useSelector((state: RootState) => state.cartState);
  //console.log(Item);
  // console.log(rawData.cartState);
  //  console.log(Item);
  //const Item = useSelector(state => state);
  //const item = useSelector((state: RootState) => state.cartState);
  // const dispatch = useDispatch();

  return (
    <div>
      안뇽
      <h2 className="title-cart">장바구니</h2>
      {Item.map((a, i) => {
        return (
          <div className="cart-item" key={i}>
            <div className="item1">
              <p>{a.product}</p>
            </div>
            <div className="item2">
              <p>{a.price}원</p>
            </div>
            <div className="item3">
              <button>+</button>
              <p>{a.count}</p>
              <button>-</button>
            </div>
            <div className="item4">
              <button>삭제</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
