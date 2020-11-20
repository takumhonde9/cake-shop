import express from "express";

import { getCheckout, getDoCheckout } from "../controllers/checkout.js";

const router = express.Router();

router.get("/", getCheckout);

router.post("/", getDoCheckout);

export const checkout = router;
