
import { Router } from "express";
import * as ctrl from "../controllers/subject.controller";

const router = Router();
router.post("/getList", ctrl.list);
router.post("/", ctrl.create);
router.post("/:id", ctrl.update);
router.post("/:id", ctrl.remove);

export default router;
