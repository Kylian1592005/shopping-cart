import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { state } = useContext(CartContext);
  const [searchQuery, setSetQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = state.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 navbar w-full bg-base-100 text-base-content rounded-b-xl shadow-md px-4 sm:px-8 py-3">
        <div className="navbar-start">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-black text-primary tracking-wide hover:opacity-90 transition-opacity"
          >
            Shopping Cart
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex items-center gap-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered input-sm w-24 md:w-auto"
              value={searchQuery}
              onChange={(e) => setSetQuery(e.target.value)}
            />
          </div>

          <div className="form-control w-full sm:w-xs">
            <select
              className="select select-bordered select-sm sm:select-md w-full"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default (API order)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-1">
          <Link
            to="/cart"
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="badge badge-sm badge-primary indicator-item font-bold text-primary-content animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <button
            type="button"
            className="btn btn-ghost btn-square lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute top-full left-0 flex w-full flex-col gap-3 rounded-b-xl bg-base-100 p-4 shadow-md lg:hidden"
          >
            <input
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSetQuery(e.target.value)}
            />
            <select
              aria-label="Sort products"
              className="select select-bordered w-full"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default (API order)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
            <ul className="menu menu-sm w-full p-0 font-medium">
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Products
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <Outlet context={{ searchQuery, sortOption }} />
      </main>
    </>
  );
}
