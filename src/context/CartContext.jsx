import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/cartReducer";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
