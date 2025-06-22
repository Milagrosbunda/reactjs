const BASE_URL = new URL(
  "https://684d6df665ed087139161491.mockapi.io/api/v2/products"
);
const HEADER = { "Content-Type": "application/json" };

function handleResponse(response) {
  if (!response.ok) {
    const error = new Error("HTTP error");
    error.status = response.status;
    throw error;
  }
  return response.json();
}

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
  fetch(`${BASE_URL}?page=1`).then((res) => {
    return handleResponse(res);
  });

export const getLimitedProducts = (maxQty) =>
  fetch(`${BASE_URL}?page=1&limit=${maxQty}`).then((res) => {
    return handleResponse(res);
  });

export const getProduct = (id) => {
  return fetch(`${BASE_URL}/${id}`).then((res) => {
    return handleResponse(res);
  });
};

export const getPromoProducts = () =>
  fetch(`${BASE_URL}?hasPromo=true&page=1`).then((res) => {
    return handleResponse(res);
  });
