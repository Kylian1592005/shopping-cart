import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useOutletContext } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchQuery, sortOption } = useOutletContext();

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

  const cleanQuery = (searchQuery || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");

  const filteredProducts = products
    .filter((product) => {
      const cleanTitle = product.title.toLowerCase().replace(/\s+/g, "");
      return cleanTitle.includes(cleanQuery);
    })
    .sort((a, b) => {
      if (sortOption === "default") return 0;
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.title.localeCompare(b.title);
      if (sortOption === "name-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  if (loading)
    return (
      <div className="flex justify-center my-10 w-full">
        <span className="loading loading-spinner loading-lg mr-2"></span>
        <span>Loading</span>
      </div>
    );
  if (error) return <p className="text-center text-error my-10">{error}</p>;

  return (
    <div className="w-full min-h-screen bg-base-200">
      <div className="container mx-auto p-6">
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p className="text-center my-10 text-base-content/60">
            No smartphones found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
