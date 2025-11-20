// THIS FILE CAN ALSO BE NAMED AS user.model.js

import mongoose from "mongoose";

const uerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profilePic: {
        type: String,
        default: "",
    }
},
{
    timestamps: true,  //createdAt and updatedAt fields
});


const User = mongoose.model("User", uerSchema);

export default User;