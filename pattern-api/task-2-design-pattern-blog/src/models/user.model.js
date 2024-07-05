import mongoose, { Schema, Types } from "mongoose";

const userSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

export const UserModel =
	mongoose.models.Users || mongoose.model("Users", userSchema);
