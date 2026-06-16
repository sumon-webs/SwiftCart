"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Selected product state hook to pass directly down to your modal assignment requirement
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Something went wrong while pulling products.");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 1. Loading Skeleton Grid Pattern
  if (loading) {
    return (
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-full h-[380px] bg-gray-100 dark:bg-zinc-800 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  // 2. Fallback Error UI State
  if (error) {
    return (
      <section className="py-20 text-center">
        <div className="inline-flex p-4 rounded-full bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 mb-4">
          ⚠️
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100">
          Failed to load catalogue
        </h3>
        <p className="text-sm text-gray-500 mt-1">{error}</p>
      </section>
    );
  }

  // 3. Complete Loaded Feed Layout
  return (
    <section className="py-12 bg-gray-50/30 dark:bg-zinc-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>

        {/* Placeholder hook check: Render your Product Details Modal right here if selectedProduct isn't null */}
      </div>
    </section>
  );
}
