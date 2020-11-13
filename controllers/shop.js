import { STATUS } from "../constants.js";

export const getShop = (req, res) => {
  return res.status(STATUS.OK).render("shop", {
    pageTitle: "Baked",
    path: "/",
  });
};
