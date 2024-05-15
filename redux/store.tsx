import { configureStore } from "@reduxjs/toolkit";
import { CartState } from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    cartState: CartState.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
