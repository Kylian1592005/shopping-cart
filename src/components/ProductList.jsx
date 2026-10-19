import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
