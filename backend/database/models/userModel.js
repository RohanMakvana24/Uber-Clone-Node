import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "The Length Of Firstname must be 3 character"]
        },
        lastname: {
            type: String,
            minlength: [3, "The Length Of Lastname must be 3 character"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 5 character"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    }
});


// ^ Token Generates ^ //
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
    return token;
}
// ^ Hash Password ^ //
userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 10)
}

// ^ Comapare Password ^ //
userSchema.methods.comaprePassword = async (password) => {
    return await bcrypt.compare(password, this.password)
}


// ^ Model Create ^ //
const UserModel = mongoose.model("Users", userSchema);

export default UserModel;