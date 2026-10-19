export default function Navbar({ cartCount = 0 }) {
  return (
    <div className="navbar w-full bg-base-100 text-base-content rounded-b-xl shadow-md px-8 py-3 mb-6">
      <div className="navbar-start">
        <h1 className="text-xl sm:text-2xl font-black text-primary tracking-wide">
          Shopping Cart
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li>
            <a className="hover:text-primary transition-colors">Home</a>
          </li>
          <li>
            <a className="hover:text-primary transition-colors">Product</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://w3.org"
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
        </div>
      </div>
    </div>
  );
}
