import apiFetch from "./api-fetch";

export async function getProducts() {
  return await apiFetch("/products");
}

export async function getProductById(id) {
  return await apiFetch(`/products/${id}`);
}

export async function updateProduct(id, productData) {
  const { token, ...product } = await apiFetch(`/products/${id}`, {
    method: "PATCH",
    body: productData,
  });
  return product;
}
