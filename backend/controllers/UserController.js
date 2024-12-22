import UserModel from "../database/models/userModel.js";
import { validationResult } from 'express-validator'
import { createUser } from "../services/user.service.js";

// ^ Ragister User Section ^ //
export const RagisterUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body;

        const hashPassword = await UserModel.hashPassword(password);
        const user = await createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword
        })

        const token = user.generateAuthToken();
        res.status(201).json({
            token, user
        })

    } catch (error) {
        console.log(error)
        res.status(504).json({
            errors: error
        })
    }
}

// ^ Login User Section ^ //
export const LoginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await UserModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const isMatch = await user.comaprePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const token = user.generateAuthToken();
        res.status(200).json({ token, user });
    } catch (error) {
        console.log(error);
        res.status(504).json({
            errors: error
        })
    }
}