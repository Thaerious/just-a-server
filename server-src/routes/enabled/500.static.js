import express from "express";

const router = express.Router();

router.use(express.static(`www`));

export default router;