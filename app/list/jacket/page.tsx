"use client";

import ListLeft from "@/app/ListLeft";
import { useRouter } from "next/navigation";
import { productData } from "@/util/productData";
import { useDispatch } from "react-redux";
import { addcart } from "@/redux/cartSlice";

export default function JacketPage() {
  let router = useRouter();
  const dispatch = useDispatch();
  const handleClick = (
    id: number,
    product: string,
    price: number,
    count: number
  ) => {
    dispatch(addcart({ id, product, price, count }));
    router.push("/cart");
  };

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
                <div className="good" key={i}>
                  <img src={`/jacket${i + 1}.png`} className="good-img" />
                  <div className="good-info">
                    <span>{productData.jacket[i].product}</span>
                    <span>{productData.jacket[i].price}원</span>
                    <button
                      onClick={() =>
                        handleClick(a.id, a.product, a.price, a.count)
                      }
                    >
                      장바구니
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
