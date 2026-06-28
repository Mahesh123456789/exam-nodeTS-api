
import { Router } from "express";
import * as ctrl from "../controllers/class.controller";

const router = Router();
router.post("/standardsList", ctrl.standardList);
router.post("/examTypesList", ctrl.examTypsList);
router.post("/addStandard", ctrl.addStandard);
router.post("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

export default router;
