import { STATUS, PATH } from "../constants.js";
import { cart } from "../test-data.js";

export const getAbout = (req, res) => {
  return res.status(STATUS.OK).render("about", {
    pageTitle: "Baked | Checkout",
    path: PATH.ABOUT,
    cart,
  });
};
