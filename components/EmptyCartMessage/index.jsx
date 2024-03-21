import React from "react";
import Image from "next/image";
import EmptyCart from "@/assets/images/empty-cart.svg";

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={EmptyCart}
        alt="Empty Cart"
        className="mx-auto mb-4"
        width={100}
        height={100}
        priority
      />
      <p className="text-gray-700 font-medium text-lg">Your cart is empty.</p>
    </div>
  );
};

export default EmptyCartMessage;
