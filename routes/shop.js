import express from "express";

import { getShop } from "../controllers/shop.js";

const router = express.Router();

router.get("/", getShop);

export const shop = router;
