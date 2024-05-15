import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Icart {
  id: number;
  product: string;
  price: string;
  count: number;
}

const initialState: Icart[] = [
  {
    id: 1,
    product: "홍해인자켓",
    price: "20000",
    count: 1,
  },
  {
    id: 6,
    product: "티모시자켓",
    price: "20000",
    count: 1,
  },
];

export const CartState = createSlice({
  name: "cart",
  initialState,
  //initialState를 수정해주는 함수이다
  reducers: {
    //장바구니에서추가, 리스트페이지랑연결
    addcart: (state, action) => {
      console.log(action.payload);
      //state.push(action.payload);
      //   const common = state.findIndex(
      //     el => el.product === action.payload.product
      //   );
      //   {
      //     common === -1 ? state.push(action.payload) : state[common].count++;
      //   }
    },
    //장바구니에서삭제
    // deletecart: (state, action: PayloadAction<number>) => {
    //   console.log(action.payload);
    //   // state.pop(action.payload);
    // },

    countUp: (state, action) => {
      //cart에서 수량 조절하는 것 , 플러스
      state[action.payload].count++;
      //console.log(Item);
      // console.log(state);
    },
    // countDown: (state, action: PayloadAction<number>) => {
    //   //cart에서 수량 조절하는 것, 마이너스
    //   // state[action.payload].count--;
    //   console.log(action.payload);
    // },
  },
});
export const { addcart, countUp } = CartState.actions;

//export default CartState.reducer;
