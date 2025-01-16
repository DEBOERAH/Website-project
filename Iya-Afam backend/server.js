import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "http2";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";



// app config
const app = express();

const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);


app.get("/", (req, res) => {
    res.status(200).send("api working");
});

// listen
app.listen(port, () => {
    console.log(`server started on port http://localhost:${port}`);
});

