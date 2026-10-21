import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

export default function ProuductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductData() {
      const url = "https://dummyjson.com/products/category/smartphones";
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProductData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center my-10 w-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (error) return <p className="text-center text-error my-10">{error}</p>;
  return (
    <div className="w-full min-h-screen bg-base-200">
      <div className="container mx-auto p-6">
        <ProductList products={products} />
      </div>
    </div>
  );
}
