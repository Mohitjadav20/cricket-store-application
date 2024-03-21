//Base url of API
const baseRoute = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

// Define API endpoints for fetching product data
export const API_ROUTES = {
  PRODUCTS: `${baseRoute}/products`,
  PRODUCTS_DETAIL: (id) => `${baseRoute}/product-detail/${id}`,
};
