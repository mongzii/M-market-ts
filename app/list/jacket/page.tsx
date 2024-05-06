"use client";

import ListLeft from "@/app/ListLeft";
import { useRouter } from "next/navigation";
import { productData } from "@/util/productData";

export default function JacketPage() {
  let router = useRouter();
  // const handleClick=()=>{}

  return (
    <div>
      <h1 className="title">Jacket</h1>
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
