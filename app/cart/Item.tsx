"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { deletecart, countUp, countDown } from "../../redux/cartSlice";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import type { Icart } from "../../redux/cartSlice";
import { useSession } from "next-auth/react";

interface Irawdata {
  cartState: Icart[];
}

export default function Item() {
  const { data: session, status } = useSession();
  let router = useRouter();
  const Item: Icart[] = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch();

  const handleUp = (i: number) => {
    dispatch(countUp(i));
  };
  const handleDown = (i: number) => {
    dispatch(countDown(i));
  };
  const handleDelete = (
    id: number,
    product: string,
    price: number,
    count: number
  ) => {
    dispatch(deletecart({ id, product, price, count }));
  };

  return (
    <div>
      {status === "unauthenticated" ? (
        <h1 className="login-cart">로그인 먼저하세요</h1>
      ) : (
        <div>
          <h2 className="title-cart">cart페이지</h2>
          {Item.map((el, i) => {
            return (
              <div className="cart-item" key={i}>
                <div className="item1">
                  <p>{el.product}</p>
                </div>
                <div className="item2">
                  <p>{el.price}원</p>
                </div>
                <div className="item3">
                  <button onClick={() => handleUp(i)}>+</button>
                  <p>{el.count}</p>
                  <button onClick={() => handleDown(i)}>-</button>
                </div>
                <div className="item4">
                  <button
                    onClick={() =>
                      handleDelete(el.id, el.product, el.price, el.count)
                    }
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* <h2 className="title-cart">장바구니</h2>
      {Item.map((el, i) => {
        return (
          <div className="cart-item" key={i}>
            <div className="item1">
              <p>{el.product}</p>
            </div>
            <div className="item2">
              <p>{el.price}원</p>
            </div>
            <div className="item3">
              <button onClick={() => handleUp(i)}>+</button>
              <p>{el.count}</p>
              <button onClick={() => handleDown(i)}>-</button>
            </div>
            <div className="item4">
              <button
                onClick={() =>
                  handleDelete(el.id, el.product, el.price, el.count)
                }
              >
                삭제
              </button>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
