import express from "express";

import {
  getContact,
  getSendContact,
  getSubscribe,
} from "../controllers/contact.js";

const router = express.Router();

router.get("/", getContact);

router.post("/", getSendContact);

router.post("/subscribe", getSubscribe);

export const contact = router;
