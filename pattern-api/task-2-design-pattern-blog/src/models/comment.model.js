import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
	{
		content: { type: String, required: true },
		post_id: { type: Schema.Types.ObjectId, ref: "Posts", required: true },
		user_id: { type: Schema.Types.ObjectId, required: true },
	},
	{
		timestamps: true,
	}
);

export const CommentModel =
	mongoose.models.Comments || mongoose.model("Comments", commentSchema);
