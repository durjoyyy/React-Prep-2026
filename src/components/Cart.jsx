import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // total using reduce
  const totalAmount = cartItems.reduce((acc, item) => acc+item.price,0);

  const formattedTotal = (totalAmount / 100).toFixed(2);

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">
          🛒 Your Cart
        </h1>

        {/* Empty state */}
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 bg-white p-10 rounded-xl shadow">
            Your cart is empty
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                data-testid='cartItem'
                  key={`${item.id}-${index}`}   // ✅ fixes duplicate key issue
                  className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                >
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-xs text-gray-400">
                      {item.itemAttribute?.portionSize}
                    </p>
                  </div>

                  <div className="font-bold text-green-600">
                    ₹{(item.price / 100).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 bg-white p-5 rounded-xl shadow flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-green-700">
                ₹{formattedTotal}
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold">
                Proceed to Checkout
              </button>

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;