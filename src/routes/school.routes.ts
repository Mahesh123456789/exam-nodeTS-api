
import { Router } from "express";
import * as ctrl from "../controllers/school.controller";

const router = Router();
router.post("/getList", ctrl.list);
router.post("/create", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

export default router;
