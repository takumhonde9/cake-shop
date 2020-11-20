import { STATUS } from "../constants.js";
import { cart } from "../test-data.js";

export const getPageNotFound = (req, res) => {
  return res.status(STATUS.OK).render("page-not-found", {
    pageTitle: "Baked | Page not found",
    path: "",
    cart,
  });
};
