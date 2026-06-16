"use server";


export const getProducts = async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      console.log("Fetch failed with status:", res.status);
    }
    return res.json();
  } catch (error) {
    console.error("API Error details:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
