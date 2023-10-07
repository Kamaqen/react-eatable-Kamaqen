import apiFetch from "./api-fetch";

export async function getProducts() {
  return await apiFetch("/products");
}

export async function updateProduct(productData, id) {
  const { token, ...product } = await apiFetch(`/products/:id`, {
    method: "PATCH",
    body: productData,
  });
  return product;
}