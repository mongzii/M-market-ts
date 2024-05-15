"use client";

import ListLeft from "@/app/ListLeft";
import { useRouter } from "next/navigation";
import { productData } from "@/util/productData";
import { useDispatch } from "react-redux";
import { addcart } from "@/redux/cartSlice";

export default function ShoePage() {
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
                  <button
                    onClick={() =>
                      handleClick(a.id, a.product, a.price, a.count)
                    }
                  >
                    장바구니
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
