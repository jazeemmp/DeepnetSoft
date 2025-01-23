"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const menuSchema = new mongoose_1.default.Schema({
    menuName: {
        type: String,
        required: true,
    },
    menuDescription: {
        type: String,
        required: true,
    },
    items: [
        {
            itemName: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            itemDescription: {
                type: String,
                required: true,
            },
        },
    ],
}, { timestamps: true });
const Menu = mongoose_1.default.model("Menu", menuSchema);
exports.default = Menu;
