import React from "react";
import { CartItem } from "@/components";

const CartItemList = ({ cartItems }) => {
  return (
    <div className="col-span-2 lg:col-span-2 overflow-auto max-h-[500px]">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItemList;
