import express, { Router } from "express";
import userRoutes from "./userRoutes";
import taskRoutes from "./taskRoutes";

const router: Router = express.Router();

router.use("/user", userRoutes); //api/user/login
router.use("/task", taskRoutes);

export default router;
