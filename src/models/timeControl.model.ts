import mongoose, {Schema} from "mongoose";

interface ITimeControl extends mongoose.Document {
    startDate: Date;
    endDate: Date;
    user: Schema.Types.ObjectId;
}
const timeControlSchema = new Schema<ITimeControl>({
    startDate: Date,
    endDate: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

export const timeControl = mongoose.model<ITimeControl>("timeControl", timeControlSchema);