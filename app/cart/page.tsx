// "use client";

// import { useSelector, useDispatch } from "react-redux";
// import type { RootState } from "@/redux/store";
// import { countUp } from "../../redux/cartSlice";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function Cart() {
//   let router = useRouter();
//   //const item = useSelector(state => state.cartState);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2 className="title-cart">장바구니</h2>
//       {/* <button onClick={() => dispatch(countUp())}>+</button> */}
//       <button onClick={() => console.log("dd")}>+</button>
//     </div>
//   );
// }

import Item from "./Item";

export default function Cart() {
  return (
    <div>
      <Item />
    </div>
  );
}
