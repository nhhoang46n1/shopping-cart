import axiosClient from "./axiosClient";

const productsApi = {
  getAll() {
    const url = "/products";
    return axiosClient.get(url);
  },
};

export default productsApi;
