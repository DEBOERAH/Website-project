import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt  from "bcrypt";
import jwt from "jsonwebtoken";

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}



// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // Password matches, create a token and send it
            const token = createToken(user._id);
            res.json({ success: true, token });
        } else {
            // Password does not match
            res.json({ success: false, message: "Incorrect password" });
        }
    } catch (error) {
        // Handle errors
        console.error(error);
        res.json({ success: false, message: "Something went wrong" });
    }
};


// Route for user registration
const registerUser=async(req,res)=>{

    try{

        const {name,email,password}=req.body;
        // checking if user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }
        // validating email format and strong paswword

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if(password.length<8){
            
        
            return res.json({success:false,message:"Password must be at least 8 characters long"});
        }

        // hashing user password 
        const salt  = await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)

        const newUser =new userModel({
            name,
            email,
            password :hashedPassword
        })

        const user =await newUser.save()

        const token = createToken(user._id)

        res.json({success:true,token})


    }catch(error){

        console.log(error);
        res.json({success:false,message:error.message}) ;

    }
   
    
}

// route for admin login
const adminLogin=async(req,res)=>{

}

export {loginUser,registerUser,adminLogin}