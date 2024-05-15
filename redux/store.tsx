import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
