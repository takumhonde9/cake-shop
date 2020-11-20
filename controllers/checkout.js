import { STATUS, PATH } from "../constants.js";
import { cart } from "../test-data.js";

export const getCheckout = (req, res) => {
  return res.status(STATUS.OK).render("checkout", {
    pageTitle: "Baked | Checkout",
    path: PATH.CHECKOUT,
    cart,
  });
};
export const getDoCheckout = (req, res) => {
  const { email, firstName, lastName } = req.body;
  console.log({ email, firstName, lastName });
  return res.status(STATUS.OK).render("checkout", {
    pageTitle: "Baked | Checkout",
    path: PATH.CHECKOUT,
    cart,
  });
};
