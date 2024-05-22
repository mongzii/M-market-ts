import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Icart {
  id: number;
  product: string;
  price: number;
  count: number;
}

const initialState: Icart[] = [
  {
    id: 1,
    product: "홍해인자켓",
    price: 20000,
    count: 1,
  },
  {
    id: 6,
    product: "티모시자켓",
    price: 20000,
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
      //console.log(action.payload);
      //state.push(action.payload);
      const common = state.findIndex(
        el => el.product === action.payload.product
      );
      {
        common === -1 ? state.push(action.payload) : state[common].count++;
      }
    },

    //장바구니에서삭제
    deletecart: (state, action) => {
      const common: number = state.findIndex(
        el => el.product === action.payload.product
      );
      //console.log(common); //만약1번이면
      // state[1] 이거가 state에서 지워져야해
      return state.filter(el => el.id !== state[common].id);
    },

    //cart에서 수량 조절하는 것 , 플러스
    countUp: (state, action) => {
      state[action.payload].count++;
    },

    //cart에서 수량 조절하는 것, 마이너스
    countDown: (state, action) => {
      // state[action.payload].count--;
      // console.log(state[action.payload].count--); //떨어지기전 수가 뜬다
      {
        state[action.payload].count-- >= 2
          ? state[action.payload].count
          : (alert("0이하는안돼요"), state[action.payload].count++);
      }
    },
  },
});
export const { addcart, deletecart, countUp, countDown } = CartState.actions;
