"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard"; 
import { getProducts } from "@/lib/api";
import { Button, Spinner } from "@heroui/react";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true); 
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [
          "all",
          ...new Set(data.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false); 
      } catch (err) {
        setError("Failed to fetch products.");
        setLoading(false); 
      }
    };
    fetchInitialData();
  }, []);

  // Filter & Search Logic with Debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let result = products;
      if (selectedCategory !== "all") {
        result = result.filter((p) => p.category === selectedCategory);
      }
      if (searchTerm.trim() !== "") {
        result = result.filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }
      setFilteredProducts(result);
      setCurrentPage(1); // Reset to page 1 on new filter
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedCategory, products]);

  // Pagination Calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading)
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-4 py-3 rounded-xl border"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 rounded-xl border capitalize"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No products found matching your criteria.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <Button
                isDisabled={currentPage === 1} // প্রথম পেজে থাকলে প্রিভিয়াস বাটন ডিজেবল
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>

              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                isDisabled={currentPage === totalPages} // শেষ পেজে থাকলে নেক্সট বাটন ডিজেবল
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
