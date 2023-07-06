import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const startDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Hooray! The database is ready for action! Let the data magic begin! ✨💾✨`);
  } catch (error) {
    console.error(`Houston, we have a problem! The database is taking a coffee break ☕️. Don't worry, we'll get it back online soon!`, error);
  }
};

export default startDB;