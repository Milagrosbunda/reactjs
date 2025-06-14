const BASE_URL = new URL(
  "https://684d6df665ed087139161491.mockapi.io/api/v2/products"
);
const HEADER = { "Content-Type": "application/json" };

export const createProduct = (product) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

export const deleteProduct = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });

export const updateProduct = (id, product) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

export const getProducts = () =>
  fetch(`${BASE_URL}?page=1`).then((res) => res.json());

export const getLimitedProducts = (maxQty) =>
  fetch(`${BASE_URL}?page=1&limit=${maxQty}`).then((res) => res.json());

export const getProduct = (id) => {
  return fetch(`${BASE_URL}/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  });
};
