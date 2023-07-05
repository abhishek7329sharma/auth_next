import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: [true, "Please enter a username"],
        unquie: true,
    },
    email:{
        type: 'string',
        required: [true, "Please enter a email"]
    },
    password:{
        type: 'string',
        required: [true, "Please enter a password"]
    },
    isVerified: {
        type: 'boolean',
        default: false
    },
    isAdmin: {
        type: 'boolean',
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: String
})

const User = mongoose.models.auths || mongoose.model("auths", userSchema)

export default User;