"use client";

import ListLeft from "../ListLeft";
import { useRouter } from "next/navigation";
import { productData } from "@/util/productData";
import { useDispatch } from "react-redux";
// import { addcart } from "@/redux/store";

export default function List() {
  let router = useRouter();
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("메롱");
  };

  return (
    <div>
      <h2 className="title">상품목록</h2>
      <div className="merchandise">
        <div className="list-left">
          <ListLeft />
        </div>
        <div className="list-right">
          <div className="goods">
            {productData.jacket.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/jacket${i + 1}.png`} className="food-img" />
                  <h4>{productData.jacket[i].product}</h4>
                  <h4>{productData.jacket[i].price}원</h4>
                  <button onClick={() => handleClick()}>장바구니</button>
                </div>
              );
            })}
            {productData.shoe.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/shoe${i + 1}.png`} className="food-img" />
                  <h4>{productData.shoe[i].product}</h4>
                  <h4>{productData.shoe[i].price}원</h4>
                  <button onClick={() => handleClick()}>장바구니</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
