"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenu = exports.getMenu = void 0;
const menu_modal_1 = __importDefault(require("../model/menu.modal"));
//@desc get menu items
//@route GET /api/get/menu
//@access Public
const getMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield menu_modal_1.default.find();
        res.status(200).json(menu);
    }
    catch (error) {
        res.status(404).json({ error });
    }
});
exports.getMenu = getMenu;
//@desc create menu items 
//@route POST /api/create/menu
//@access Public
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { menuName, menuDescription, itemName, description, price } = req.body;
        const updatedMenu = yield menu_modal_1.default.findOneAndUpdate({ menuName }, {
            $set: {
                description: menuDescription,
            },
            $push: {
                items: {
                    itemName,
                    itemDescription: description,
                    price,
                },
            },
        }, { new: true, upsert: true } // if the document does not exist, insert it
        );
        res.status(201).json(updatedMenu);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.createMenu = createMenu;
