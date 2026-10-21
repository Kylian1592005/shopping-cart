import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../util/formatCurrency";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { state, dispatch } = useContext(CartContext);

  const { subTotal, shipping, total } = useMemo(() => {
    const sub = state.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0,
    );
    const ship = state.length === 0 ? 0 : 5;
    return {
      subTotal: sub,
      shipping: ship,
      total: sub + ship,
    };
  }, [state]);

  const increaseQty = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item });
  };

  const decreaseQty = (item) => {
    if ((item.quantity || 1) <= 1) {
      removeItem(item);
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: item });
    }
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="container mx-auto p-4 lg:p-10">
      {state.length === 0 ? (
        <div className="hero bg-base-200 rounded-box p-10 text-center max-w-2xl mx-auto shadow-sm border border-base-300">
          <div className="hero-content flex-col">
            <div className="text-5xl">🛒</div>
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="opacity-70 max-w-sm">
              Looks like you haven't added anything to your cart yet. Head back
              to our shop to explore products.
            </p>
            <Link to="/" className="btn btn-primary mt-4">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center bg-base-100 p-3 rounded-xl border border-base-300 shadow-sm">
              <span className="text-sm font-medium opacity-70">
                Items ({state.length})
              </span>
              <button
                onClick={clearCart}
                className="btn btn-ghost btn-xs text-error hover:bg-error/10 normal-case font-semibold"
              >
                🗑️ Clear All
              </button>
            </div>
            {state.map((item) => (
              <div
                key={item.id}
                className="card card-side bg-base-100 shadow-sm border border-base-300 p-4 items-center"
              >
                <figure className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-base-200">
                  <img
                    src={item.images?.[0] || "https://placehold.co"}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </figure>

                <div className="flex flex-col sm:flex-row flex-grow justify-between items-start sm:items-center ml-4 gap-4">
                  <div>
                    <h2 className="font-bold text-base line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-sm opacity-70 mt-0.5">
                      {formatCurrency(item.price)}
                    </p>
                  </div>

                  <div className="join border border-base-300">
                    <button
                      className="btn btn-sm join-item bg-base-100 hover:bg-base-200"
                      onClick={() => decreaseQty(item)}
                    >
                      -
                    </button>
                    <input
                      className="input input-sm w-12 text-center join-item bg-base-100 font-semibold"
                      value={item.quantity || 1}
                      readOnly
                    />
                    <button
                      className="btn btn-sm join-item bg-base-100 hover:bg-base-200"
                      onClick={() => increaseQty(item)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn btn-ghost btn-sm text-error normal-case"
                    onClick={() => removeItem(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-base-200 shadow-sm border border-base-300 p-6 sticky top-28">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="opacity-75">Subtotal</span>
                <span className="font-semibold">
                  {formatCurrency(subTotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-75">Shipping</span>
                <span className="font-semibold">
                  {formatCurrency(shipping)}
                </span>
              </div>
              <div className="divider my-1"></div>
              <div className="flex justify-between font-bold text-lg text-base-content">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
            <button className="btn btn-primary w-full shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
