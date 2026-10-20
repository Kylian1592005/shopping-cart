import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext); 
  const onAddToCart = (selectedProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: selectedProduct, 
    });
  };

  return (
    <div className="card bg-base-100 w-100 sm:w-96 shadow-xl border border-base-200">
      <figure className="px-4 pt-4 h-60 bg-base-200/50">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="rounded-xl h-full object-contain"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start gap-2">
          <h2 className="card-title text-base sm:text-lg">{product.title}</h2>
          <div className="badge badge-secondary">${product.price}</div>
        </div>
        <p className="text-sm line-clamp-4 text-base-content/70">
          {product.description}
        </p>
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary btn-sm sm:btn-md"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
