import express from "express";
import { sendMessage } from "../controllers/auth.js";

const router = express.Router();

router.get("/:message", sendMessage);

export default router;
