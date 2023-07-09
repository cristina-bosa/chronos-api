import { User } from "../models/user.model";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const createRandomPassword = (length: number) => {
    const characets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characets.charAt(Math.floor(Math.random() * characets.length));
    }
    return password;
}

const userData = [
    {
        name: "Paco", 
        username: "Santana", 
        email: "pacosantana@example.com",
        password: bcryptjs.hashSync(createRandomPassword(8), 9),
        createdAt: Date.now(),
        updatedAt: '',
        deletedAt: ''
    },
    {
        name: "Juan",
        username: "Perez",
        email: "juanperez@example.com",
        password: createRandomPassword(8),
        createdAt: Date.now(),
        updatedAt: '',
        deletedAt: ''
    },
    {
        name: "Maria",
        username: "Lopez",
        email: "marialopez@example.com",
        password: createRandomPassword(8),
        createdAt: Date.now(),
        updatedAt: '',
        deletedAt: ''

    },
    {
        name: "Pedro",
        username: "Garcia",
        email: "pedrogarcia@example.com",
        password: createRandomPassword(8),
        createdAt: Date.now(),
        updatedAt: '',
        deletedAt: ''
    }
];

async function seedUsers() {
    try {
        console.time('deleted')
        await User.deleteMany()
        console.log(`❌ Users deleted successfully`)
        console.timeEnd('deleted')


        console.time('created')
        await User.insertMany(userData)
        console.log(`👌 Users created successfully`)
        console.timeEnd('created')

        mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}
seedUsers()
