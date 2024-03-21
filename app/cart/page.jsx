"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutItem } from "@/store/slices/productSlice";
import { CartItemList, EmptyCartMessage, TotalPrice } from "@/components";
import { ROUTES } from "@/utils";
import { useRouter } from "next/navigation";

const CartPage = () => {
  //handle navigation
  const router = useRouter();

  // Getting the dispatch function and selecting the cart items from the Redux store
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.products);

  // Calculate the total price of all products in the cart
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Clear the cart
    dispatch(setCheckoutItem([]));
    // Redirect to home page after checkout
    router.push(ROUTES.HOME);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        // Display an empty cart message if there are no items in the cart
        <EmptyCartMessage />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Display cart items */}
          <CartItemList cartItems={cartItems} />
          {/* Display total price and checkout button */}
          <TotalPrice totalPrice={totalPrice} handleCheckout={handleCheckout} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
