import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//url of the database
const MONGO_URI = process.env.MONGO_URI;

//configure and conecction to the database
const connectDB = async () : Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Hooray! The database is ready for action! Let the data magic begin! ✨💾✨`);
  } catch (error) {
    console.error(`Houston, we have a problem! The database is taking a coffee break ☕️. Don't worry, we'll get it back online soon!`, error);
    process.exit(1); //finish the app
  }
};

export default connectDB;