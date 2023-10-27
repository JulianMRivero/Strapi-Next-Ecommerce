import { API_URL, STRAPI_URL } from "../config";

export async function getProducts({ page = 1 }) {
  try {
    const pageNumber = isNaN(page) ? 1 : page;
    const response = await fetch(
      `${API_URL}/products?populate[categories][fields][0]=id&populate[categories][fields][1]=name&populate[image][fields][0]=url&pagination[page]=${pageNumber}&pagination`,
      { cache: "no-store" }
    );
    const { data, meta } = await response.json();
    const { pagination } = meta;
    return { data, pagination };
  } catch (error) {
    console.log(error);
  }
}
export function getImage({ attributes }) {
  let url = attributes.image?.data?.[0]?.attributes?.url;
  return url;
}
// export async function getProductsId({ id }) {
//   try {
//     const response = await fetch(
//       `${API_URL}/products/${id}?populate[categories][fields][0]=id&populate[categories][fields][1]=name&populate[image][fields][0]=url`
//     );
//     const { data } = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
export async function getFakeProductsId({ id }) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${id}`
    );
    const  data  = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
