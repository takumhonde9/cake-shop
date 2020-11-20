import { PATH, STATUS } from "../constants.js";
import { products, cart } from "../test-data.js";

export const getProducts = (req, res) => {
  return res.status(STATUS.OK).render("products", {
    pageTitle: "Baked | Catalog",
    path: PATH.PRODUCTS,
    products,
    cart,
  });
};
export const getProduct = (req, res) => {
  const { id } = req.params;
  const product = products[id];
  return res.status(STATUS.OK).render("product", {
    pageTitle: "Baked | Product tilte",
    path: PATH.PRODUCTS,
    product,
    cart,
  });
};
