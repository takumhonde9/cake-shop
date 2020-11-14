import { STATUS } from "../constants.js";
import { products } from "../test-data.js";

export const getShop = (req, res) => {
  return res.status(STATUS.OK).render("shop", {
    pageTitle: "Baked",
    path: "/",
    products,
  });
};
