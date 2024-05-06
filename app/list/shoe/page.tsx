"use client";

import ListLeft from "@/app/ListLeft";
import { useRouter } from "next/navigation";
import { productData } from "@/util/productData";

export default function ShoePage() {
  let router = useRouter();
  // const handleClick=()=>{}

  return (
    <div>
      <h1 className="title">Shoe</h1>
      <div className="merchandise">
        <div className="list-left">
          <ListLeft />
        </div>
        <div className="list-right">
          <div className="goods">
            {productData.shoe.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/shoe${i + 1}.png`} className="food-img" />
                  <h4>{productData.shoe[i].product}</h4>
                  <h4>{productData.shoe[i].price}원</h4>
                  <button>장바구니</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
