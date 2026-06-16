"use server";

const api = process.env.API_URL;

export const getProducts = async () => {
  try {
    const res = await fetch(`${api}/products`);
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
  const res = await fetch(`${api}/products/${id}`);
  return res.json();
};
