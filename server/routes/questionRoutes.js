import express from "express";
const router = express.Router();
import {addQuestion, getQuestions, submitExam } from "../controllers/questionController.js";

router.post("/add", addQuestion);
router.get("/", getQuestions);
router.post("/submit", submitExam);

export default router;