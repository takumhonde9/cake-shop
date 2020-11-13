import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { config } from "./config.js";

const app = express();
// path not defined
const __dirname = path.resolve(path.dirname(""));

// view engine
app.set("view engine", "pug");

// set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
// set up public directory
app.use(express.static(path.join(__dirname, "public")));

app.listen(config.port, () => {
  console.log(`server listening on port: ${config.port}`);
});
