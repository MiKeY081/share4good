import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { categoryRoute } from "./routes/categoryRoute.js";
import { messageRoute } from "./routes/messageRoute.js";
import { orderRoute } from "./routes/orderRoute.js";
import { productRoute } from "./routes/productRoute.js";
import { userRoute } from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("homepage...");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/message", messageRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
