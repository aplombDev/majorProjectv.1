import { Router } from "express";
import { registerAdmin } from "../controller/admin.controller.js";

const router = Router();

router.route("/signup").post(registerAdmin);

export const adminRouter = router;
