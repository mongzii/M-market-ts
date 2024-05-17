"use client";

import ListLeft from "../ListLeft";
import { useRouter } from "next/navigation";
import { productData } from "@/util/productData";
import { useDispatch } from "react-redux";
import { addcart } from "@/redux/cartSlice";

export default function List() {
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
  //console.log(productData);
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
                <div className="good" key={i}>
                  <img src={`/jacket${i + 1}.png`} className="good-img" />
                  <div className="good-info">
                    <p>{productData.jacket[i].product}</p>
                    <p>{productData.jacket[i].price}원</p>
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
            {productData.shoe.map((a, i) => {
              return (
                <div className="good" key={i}>
                  <img src={`/shoe${i + 1}.png`} className="good-img" />
                  <div className="good-info">
                    <p>{productData.shoe[i].product}</p>
                    <p>{productData.shoe[i].price}원</p>
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
