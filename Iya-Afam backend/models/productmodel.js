import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { 
        type: String, 
        required: true,
        enum: ["Frozen Food", "Kerosene", "Soft Drinks"], // Predefined categories
    },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String }, // Optional field for product images
});

// Create the Product model, avoiding overwrite errors
const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;
