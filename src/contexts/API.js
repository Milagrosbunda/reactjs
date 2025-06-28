const BASE_URL = new URL(
  "https://684d6df665ed087139161491.mockapi.io/api/v2/products"
);
const HEADER = { "Content-Type": "application/json" };
function handleResponse(response) {
  console.log(response)
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

export const deleteProductById = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });

export const updateProduct = (id, product) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

export const getAllProducts = () =>
  fetch(`${BASE_URL}`).then((res) => {
    return handleResponse(res);
  });

export const getProductsSize = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data.length;
};

export const getProducts = (limit = 3, page = 1) =>
  fetch(`${BASE_URL}?sortby=id&order=desc&limit=${limit}&page=${page}`).then((res) => {
    return handleResponse(res);
  });

export const getProduct = (id) => {
  return fetch(`${BASE_URL}/${id}`).then((res) => {
    return handleResponse(res);
  });
};

export const getPromoProducts = () =>
  fetch(`${BASE_URL}?hasPromo=true`).then((res) => {
    return handleResponse(res);
  });

export const searchProducts =  (input) =>
  fetch(`${BASE_URL}?limit=3&search=${input}`).then((res) => {
    return handleResponse(res);
  });
