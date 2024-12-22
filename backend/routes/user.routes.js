import express, { Router } from 'express';
import { body } from 'express-validator'
import { RagisterUser } from '../controllers/UserController.js';
const userRoutes = express.Router();

// ^ Ragister Route ^ //
userRoutes.post("/ragister", [
    body("fullname.firstname").isLength({ min: 3 }).withMessage("First Name must be at least 3 character"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password Must be at least 6 character long")
], RagisterUser)

// ^ Login Route ^ //
userRoutes.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password Must be at least 6 character long")
],)

export default userRoutes;