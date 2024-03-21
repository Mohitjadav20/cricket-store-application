"use client";
import React, { useEffect, useState } from "react";
import { apiClient } from "@/lib";
import { API_ROUTES } from "@/utils";
import { FilterDropdown, ProductCard } from "@/components";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    sortProducts();
  }, [sortBy]);

  const fetchProducts = async () => {
    try {
      // Fetch products from API
      const productData = await apiClient(API_ROUTES.PRODUCTS, "GET");
      setProducts(productData?.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const sortProducts = () => {
    // Sort products based on selected sorting option
    if (sortBy === "name") {
      setProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortBy === "price") {
      setProducts([...products].sort((a, b) => b.price - a.price));
    }
  };

  // Update selected sorting option
  const handleSortChange = (option) => {
    setSortBy(option);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-end items-center my-4">
        <h2 className="text-lg font-semibold px-4">Filter:</h2>
        {/* Product filter drop-down component */}
        <FilterDropdown handleSortChange={handleSortChange} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {products.map((product, index) => (
          // Product card component
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
