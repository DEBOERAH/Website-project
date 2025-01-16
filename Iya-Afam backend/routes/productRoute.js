import express from "express";
import upload from "../middleware/multer.js";
import {createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/ProductController.js";

const productRouter = express.Router();



// to create new product eithout multer
productRouter.post("/create", createProduct);
productRouter.get("/get", getProducts);
productRouter.get("/get/:id", getProductById);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;