import mongoose from "mongoose";
const { Schema } = mongoose;

const timeControlSchema = new Schema({
    start_date: Date,
    end_date: Date,
});

export const timeControl = mongoose.model("timeControl", timeControlSchema);