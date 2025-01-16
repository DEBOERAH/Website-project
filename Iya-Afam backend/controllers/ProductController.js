import ProductModel from "../models/productmodel.js";

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, category, price, stock, description, imageUrl } = req.body;

        // Check for missing fields
        if (!name || !category || !price || !stock) {
            return res.status(400).json({ 
                success: false, 
                message: "Please provide all required fields: name, category, price, and stock." 
            });
        }

        // Validate category
        if (!["Frozen Food", "Kerosene", "Soft Drinks"].includes(category)) {
            return res.status(400).json({ success: false, message: "Invalid category" });
        }

        // Create and save the product
        const newProduct = new ProductModel({
            name,
            category,
            price,
            stock,
            description,
            imageUrl,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ success: true, product: savedProduct });
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


// Get all products (with optional category filter)
const getProducts = async (req, res) => {
    try {
        const { category } = req.query;

        const filter = category ? { category } : {};
        const products = await ProductModel.find(filter);

        res.status(200).json({ success: true, products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, product });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
