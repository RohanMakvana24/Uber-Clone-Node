import UserModel from "../database/models/userModel.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error("All Field are required")
    }

    const user = UserModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}