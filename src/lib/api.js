"use server";

const api = "https://fakestoreapi.com/products";
export const getProducts = async () => {
  const res = await fetch(api);
  return res.json();
};

export const getProductById = async(id)=>{
  console.log(id)
  const res = await fetch(`${api}/${id}`)
  return res.json()
}
