import { STATUS, PATH } from "../constants.js";
import { cart } from "../test-data.js";

export const getContact = (req, res) => {
  return res.status(STATUS.OK).render("contact", {
    pageTitle: "Baked | Contact Us",
    path: PATH.CONTACT,
    cart,
  });
};
export const getSendContact = (req, res) => {
  const { email, firstName, lastName } = req.body;
  console.log({ email, firstName, lastName });
  return res.status(STATUS.OK).render("contact", {
    pageTitle: "Baked | Contact Us",
    path: PATH.CONTACT,
    cart,
  });
};
