import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { VercelRequest, VercelResponse } from '@vercel/node';
import mongoConnect from "./config/mongoConnnect";
import router from "./routes/routes";

dotenv.config();
mongoConnect();

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: [
    "http://localhost:5173", 
    "https://frontend-ko98ft129-jazeemmps-projects.vercel.app", 
    "https://frontend-seven-pi-91.vercel.app"
  ],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res); // This invokes the express app for serverless function handling
};