# Shopping Cart

A responsive shopping cart web application built with React. Users can browse smartphones, search and sort products, add items to their cart, and manage their shopping cart.

## Features

- **Product Listing** – Fetch smartphone products from the DummyJSON API.
- **Search Products** – Search products by title.
- **Sort Products** – Sort by default order, price (low to high / high to low), and name (A–Z).
- **Shopping Cart** – Add and remove products from the cart.
- **Quantity Management** – Increase or decrease product quantities.
- **Cart Summary** – Display subtotal, shipping fee, and total price.
- **Clear Cart** – Remove all items from the cart.
- **Persistent Storage** – Save cart items in LocalStorage.
- **Responsive UI** – Designed for different screen sizes.

## Tech Stack

- React
- Vite
- Tailwind CSS
- daisyUI
- React Router
- Context API
- useReducer
- LocalStorage
- DummyJSON API

## API

Product data is fetched from:

[DummyJSON – Smartphones](https://dummyjson.com/products/category/smartphones)

## Data Storage

Cart items are stored in the browser's LocalStorage so the cart can persist after refreshing the page.

## Future Improvements

- Checkout flow
- Product details page
- Improved product filtering
- Better error handling and accessibility
