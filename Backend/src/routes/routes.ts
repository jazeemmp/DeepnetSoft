import { Router } from "express";
import { createMenu, getMenu } from "../controller/menu.controller";


const router = Router();

router.get('/get/menu',getMenu)
router.post('/add/menu',createMenu)

export default router;