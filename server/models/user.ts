import bcrypt from "bcryptjs";
import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  name: string;
  title: string;
  role: string;
  email: string;
  password: string;
  isAdmin: boolean;
  tasks: Schema.Types.ObjectId[];
  isActive: boolean;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
