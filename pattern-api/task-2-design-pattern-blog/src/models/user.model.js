import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true },
		isAdmin: {
			type: Boolean,
			default: false,
		},
		reputation: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export const UserModel =
	mongoose.models.Users || mongoose.model("Users", userSchema);
