
import { Router } from "express";
import * as ctrl from "../controllers/topic.controller";

const router = Router();
router.post("/getList", ctrl.list);
router.post("/save", ctrl.save);
router.post("/update", ctrl.update);
router.post("/delete", ctrl.remove);

export default router;
