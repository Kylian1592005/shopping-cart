export default function CartPage() {
  return (
    <div class="container mx-auto p-4 lg:p-10">
      <h1 class="text-3xl font-bold mb-6">Shopping Page</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-4">
          <div class="card card-side bg-base-100 shadow-sm border border-base-200 p-4">
            <figure class="w-24 h-24 rounded-box overflow-hidden">
              <img src="" alt="Product" class="object-cover w-full h-full" />
            </figure>
            <div class="card-body p-4 flex-row items-center justify-between">
              <div>
                <h2 class="card-title text-base">Product Name</h2>
                <p class="text-sm opacity-70">$29.99</p>
              </div>
              <div class="join">
                <button class="btn btn-join btn-sm">-</button>
                <input
                  class="input input-bordered input-sm w-12 text-center join-item"
                  value="1"
                />
                <button class="btn btn-join btn-sm">+</button>
              </div>
              <button class="btn btn-ghost btn-sm text-error">Remove</button>
            </div>
          </div>
        </div>

        <div class="card bg-base-200 shadow-sm h-fit p-6">
          <h2 class="text-xl font-bold mb-4">Order Summary</h2>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>$29.99</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$29.99</span>
            </div>
          </div>
          <button class="btn btn-primary w-full">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
