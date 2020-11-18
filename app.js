import express from "express";
import path from "path";
import bodyParser from "body-parser";

import { config } from "./config.js";
import { shop } from "./routes/shop.js";

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
app.use("/", shop);

const port = process.env.PORT || config.port;

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
