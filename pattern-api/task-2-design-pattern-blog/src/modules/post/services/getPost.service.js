import { PostModel } from "../../../models/post.model.js";

class GetPostService {
	async getPost(postId) {
		const post = await PostModel.findOne({
			_id: postId,
		});

		return {
			title: post.title,
			description: post.description,
			userId: post.user_id,
			id: post._id,
		};
	}
}

export default new GetPostService();
