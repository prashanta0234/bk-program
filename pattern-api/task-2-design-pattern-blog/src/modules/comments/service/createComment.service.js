import { CommentModel } from "../../../models/comment.model.js";

class CreateCommentService {
	async createComment({ userId, postId, content }) {
		await CommentModel.create({
			content,
			user_id: userId,
			post_id: postId,
		});

		return "Comment posted";
	}
}

export default new CreateCommentService();
