import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../util/formatCurrency";

export default function Cartitems({ item }) {
  const { dispatch } = useContext(CartContext);
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

  return (
    <div className="card card-side bg-base-100 shadow-sm border border-base-300 p-4 items-center">
      <figure className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-base-200">
        <img
          src={item.images?.[0] || "https://placehold.co"}
          alt={item.title}
          className="object-cover w-full h-full"
        />
      </figure>

      <div className="flex flex-col sm:flex-row flex-grow justify-between items-start sm:items-center ml-4 gap-4">
        <div>
          <h2 className="font-bold text-base line-clamp-1">{item.title}</h2>
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
  );
}
