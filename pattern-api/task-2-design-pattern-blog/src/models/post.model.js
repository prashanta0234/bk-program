import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		user_id: { type: Schema.Types.ObjectId, required: true },

		score: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export const PostModel =
	mongoose.models.Posts || mongoose.model("Posts", postSchema);
