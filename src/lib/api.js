"use server";

const api = process.env.NEXT_PUBLIC_API;
export const getProducts = async () => {
  const res = await fetch(`${api}/products`);
  return res.json();
};

export const getProductById = async(id)=>{
  const res = await fetch(`${api}/products/${id}`)
  return res.json()
}
