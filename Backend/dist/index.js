"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoConnnect_1 = __importDefault(require("./config/mongoConnnect"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
(0, mongoConnnect_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
exports.default = (req, res) => {
    app(req, res); // This invokes the express app for serverless function handling
};
