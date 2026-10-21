import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/cartReducer";

export const CartContext = createContext(null);

const init = (initialValue) => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : initialValue;
  } catch (error) {
    console.error("Failed to parse cart data:", error);
    return initialValue;
  }
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
