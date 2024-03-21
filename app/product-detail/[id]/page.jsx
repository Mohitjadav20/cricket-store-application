"use client";
import React, { useEffect, useState } from "react";
import { apiClient } from "@/lib";
import { API_ROUTES } from "@/utils";
import { Button } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAddProductCart } from "@/store/slices/productSlice";
import { AvailableSizes, ProductDetails, ProductImage } from "@/components";

export default function ProductDetail() {
  // Retrieve product ID from URL params
  const { id } = useParams();
  const dispatch = useDispatch();

  // State variables
  const [product, setProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  // Fetch product details from API
  const fetchProductDetail = async () => {
    try {
      const productData = await apiClient(
        API_ROUTES.PRODUCTS_DETAIL(id),
        "GET"
      );
      setProduct(productData?.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  // Handle click event for selecting product size
  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  // Handle adding product to cart
  const handleAddProduct = () => {
    dispatch(setAddProductCart({ ...product, size: selectedSize }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product iamge component */}
        <ProductImage src={product.imageURL} alt={product.name} />
        <div>
          {/* Product details component */}
          <ProductDetails
            description={product?.description}
            price={product?.price}
          />
          {/* Product size component */}
          {product.availableSizes && (
            <AvailableSizes
              sizes={product.availableSizes}
              selectedSize={selectedSize}
              handleSizeClick={handleSizeClick}
            />
          )}
          <Button
            className="w-full mt-4 sm:w-[50%]"
            color="primary"
            variant="ghost"
            onClick={handleAddProduct}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
