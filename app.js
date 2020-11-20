import express from "express";
import path from "path";
import bodyParser from "body-parser";

import { PATH } from "./constants.js";

import { config } from "./config.js";
import { shop } from "./routes/shop.js";
import { products } from "./routes/products.js";
import { checkout } from "./routes/checkout.js";
import { about } from "./routes/about.js";
import { contact } from "./routes/contact.js";
import { getPageNotFound } from "./controllers/errors.js";

const app = express();
// path not defined
const __dirname = path.resolve(path.dirname(""));

// view engine
app.set("view engine", "pug");

// set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
// set up public directory
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(PATH.SHOP, shop);
app.use(PATH.PRODUCTS, products);
app.use(PATH.CHECKOUT, checkout);
app.use(PATH.CONTACT, contact);
app.use(PATH.ABOUT, about);
// TODO: add page not found route
app.use(getPageNotFound);

const port = process.env.PORT || config.port;

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
