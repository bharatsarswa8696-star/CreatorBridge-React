import User from "../models/User.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {

    try {

        const {
            fullName,
            email,
            password,
            role
        } = req.body;


        const existingUser = await User.findOne({ email });


        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });

        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const user = await User.create({

            fullName,
            email,
            password: hashedPassword,
            role

        });


        res.status(201).json({

            message:"Signup successful",

            user:{
                id:user._id,
                fullName:user.fullName,
                email:user.email,
                role:user.role
            }

        });


    } catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};