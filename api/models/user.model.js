import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
    },
},
{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;