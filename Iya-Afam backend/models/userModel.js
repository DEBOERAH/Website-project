import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        cartData: { type: Object, default: {} }, // Default value for cart data
    },
    { minimized: false } // Prevents Mongoose from minimizing empty objects
);

// Create or reuse the user model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
