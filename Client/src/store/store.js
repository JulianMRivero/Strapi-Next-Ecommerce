import { create } from "zustand";
import { API_URL, STRAPI_URL } from "../config";
const saveStateToLocalStorage = (state) => {
  const cart = JSON.stringify(state);
  localStorage.setItem('cart', cart);
};
const useStore = create((set, get) => ({
  products: [],
  categories: [],
  cart: [],
  pag: {},
  filters: {
    category: "all",
    minPrice: 0,
    order: [
      { id: 1, value: "mayor" },
      { id: 2, value: "menor" },
    ],
  },
  // getProducts: async ({ page = 1 }) => {
  //   try {
  //     const pageNumber = isNaN(page) ? 1 : page;
  //     const response = await fetch(
  //       `http://localhost:1337/api/products?populate[categories][fields][0]=id&populate[categories][fields][1]=name&populate[image][fields][0]=url&pagination[page]=${pageNumber}&pagination`,
  //       { cache: "no-store" }
  //     );
  //     const { data, meta } = await response.json();
  //     const { pagination } = meta;
  //     set((state) => ({ ...state, products: data }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  getFakeProducts: async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      set((state) => ({ ...state, products: data.products }));
    } catch (error) {}
  },
  getCategory: async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/categories?populate[products][field][0]=id&populate[products][fields][1]=title"
      );
      const { data } = await res.json();
      set((state) => ({ ...state, categories: data }));
    } catch (error) {}
  },
  filterProducts: (products) => {
    const { filters, categories } = get();
    // const order = filters.order[0]?.value === "menor"
    //   ? products.sort((a, b) => a.attributes.price - b.attributes.price)
    //   : products.sort((a, b) => b.attributes.price - a.attributes.price);
    const order =
      filters.order[0]?.value === "menor"
        ? products.sort((a, b) => a.price - b.price)
        : products.sort((a, b) => b.price - a.price);
    return products.filter((product) => {
      // const productCategories = product?.attributes?.categories.data.map(category => category.attributes.name);
      const productCategories = product?.categories;
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" ||
          productCategories.includes(filters.category)) &&
        order
      );
    });
  },

  addToCart: (product) => {
    const { cart } = get();
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
  
    if (productInCartIndex >= 0) {
      const newCart = [...cart];
      newCart[productInCartIndex].quantity += 1
      set((state) => ({ ...state, cart: newCart }));
    } else {
      set((state) => ({
        ...state,
        cart: [...cart, { ...product, quantity: 1 }]
      }));
    }
  },
  deleteToCart: (product) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((item) => item.id !== product.id),
    }));
  },
  removeToCart: (product) => {
    const { cart } = get();
    const productInCart = cart.findIndex((item) => item.id === product.id);
    if (productInCart >= 0) {
      const newCart = [...cart];
      newCart[productInCart].quantity -= 1;
      set((state) => ({ ...state, cart: newCart }));
    }
  },
  clearCart: () => {
    set((state) => ({ ...state, cart: [] }));
  },
}));

export default useStore;
