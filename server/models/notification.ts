import mongoose, { Schema, Document, Model } from "mongoose";

interface INotice extends Document {
  team: Schema.Types.ObjectId[];
  text: string;
  task: Schema.Types.ObjectId;
  notiType: "alert" | "message";
  isRead: Schema.Types.ObjectId[];
}

const noticeSchema: Schema = new Schema(
  {
    team: [{ type: Schema.Types.ObjectId, ref: "User" }],
    text: { type: String },
    task: { type: Schema.Types.ObjectId, ref: "Task" },
    notiType: { type: String, default: "alert", enum: ["alert", "message"] },
    isRead: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Notice: Model<INotice> = mongoose.model<INotice>("Notice", noticeSchema);

export default Notice;
