import { PATH, STATUS } from "../constants.js";
import { products, cart } from "../test-data.js";

export const getShop = (req, res) => {
  return res.status(STATUS.OK).render("shop", {
    pageTitle: "Baked | Shop",
    path: PATH.SHOP,
    products,
    cart,
  });
};
