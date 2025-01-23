"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_controller_1 = require("../controller/menu.controller");
const router = (0, express_1.Router)();
router.get('/get/menu', menu_controller_1.getMenu);
router.post('/add/menu', menu_controller_1.createMenu);
exports.default = router;
