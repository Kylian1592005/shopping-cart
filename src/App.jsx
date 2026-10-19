import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

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

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cartItems.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);

  if (loading) return <p className="text-center text-lg my-10">Loading...</p>;
  if (error) return <p className="text-center text-error my-10">{error}</p>;

  return (
    <div className="w-full min-h-screen bg-base-200">
      <Navbar cartCount={cartCount} />

      <div className="container mx-auto p-6">
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default App;
