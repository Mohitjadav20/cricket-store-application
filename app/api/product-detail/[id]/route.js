import { Product } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const { id } = context.params;
  try {
    const productId = id;
    const product = Product.find((p) => p.id === parseInt(productId));
    if (product) {
      return NextResponse.json(
        {
          message: "Product data fetched successfully",
          data: product,
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Product not found", status: 404 },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(
      { message: "An unexpected error occurred.", status: 500 },
      { status: 500 }
    );
  }
}
