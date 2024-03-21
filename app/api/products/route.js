import { Product } from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        message: "Product data fetched successfully",
        data: Product,
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An unexpected error occurred.", status: 500 },
      { status: 500 }
    );
  }
}
