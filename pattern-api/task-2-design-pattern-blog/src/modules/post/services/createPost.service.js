import { PostModel } from "../../../models/post.model.js";

class CreatePostService {
	async createPost({ title, description, userId }) {
		const create = await PostModel.create({
			title,
			description,
			user_id: userId,
		});

		return {
			id: create._id,
			title: create.title,
			description: create.description,
			userId: create.user_id,
		};
	}
}

export default new CreatePostService();
