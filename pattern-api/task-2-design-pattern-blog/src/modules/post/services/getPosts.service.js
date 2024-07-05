import { PostModel } from "../../../models/post.model.js";

class GetPostsService {
	async getPosts(postId) {
		const posts = await PostModel.find()
			.select({ description: 1, title: 1 })
			.lean();

		const modifiedPosts = posts.map((post) => {
			const { _id, ...rest } = post;
			return { id: _id, ...rest };
		});

		return modifiedPosts;
	}
}

export default new GetPostsService();
