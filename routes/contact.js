import express from "express";

import { getContact, getSendContact } from "../controllers/contact.js";

const router = express.Router();

router.get("/", getContact);

router.post("/", getSendContact);

export const contact = router;
