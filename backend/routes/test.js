import express from "express";
import {testFunction} from "../controllers/test.js"

const router=express.Router();

router.route("/test").get(testFunction);

export default router