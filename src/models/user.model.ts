import mongoose from "mongoose";
const { Schema } = mongoose;

interface IUser extends mongoose.Document {
    name: string;
    username: string;
    email: string;
    password: string;
    createdAt: Number;
    updatedAt: Number;
    deletedAt: Number;
}
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                return emailRegex.test(value)
            },
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: 0 },
    deletedAt: { type: Date, default: 0 }
})

export const User = mongoose.model("User", userSchema);