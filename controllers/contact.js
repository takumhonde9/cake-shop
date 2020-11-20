import { STATUS, PATH } from "../constants.js";
import { products, cart } from "../test-data.js";

export const getContact = (req, res) => {
  return res.status(STATUS.OK).render("contact", {
    pageTitle: "Baked | Contact Us",
    path: PATH.CONTACT,
    cart,
    subscribeSuccessful: false,
  });
};
export const getSendContact = (req, res) => {
  const { email, firstName, lastName } = req.body;
  console.log({ email, firstName, lastName });
  return res.status(STATUS.OK).render("contact", {
    pageTitle: "Baked | Contact Us",
    path: PATH.CONTACT,
    cart,
    subscribeSuccessful: false,
  });
};
export const getSubscribe = (req, res) => {
  const {
    baseUrl,
    body: { subscriptionEmail },
  } = req;

  console.log({ subscriptionEmail });

  return res.status(STATUS.OK).redirect(baseUrl);
};
