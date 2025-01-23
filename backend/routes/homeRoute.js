import express from "express";
import { HomeData, HomeDataSave } from "../controller/homes/home.js";

const router = express.Router();

router.route("/home").get(HomeData);
router.route("/homeDataPost").post(HomeDataSave);

export default router;