import React from "react";
import { Button } from "@nextui-org/react";

const TotalPrice = ({ totalPrice, handleCheckout }) => {
  return (
    <div className="lg:col-span-1 mt-2">
      <div className="border border-gray-200 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Total Price</h2>
        <p className="text-gray-700 mb-4">${totalPrice}</p>
        <Button
          color="primary"
          variant="ghost"
          className="py-2 px-4 rounded-md w-full"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default TotalPrice;
