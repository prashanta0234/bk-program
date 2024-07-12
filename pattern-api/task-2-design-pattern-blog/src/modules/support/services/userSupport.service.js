import { PostModel } from "../../../models/post.model.js";

class UserSupport {
	async support(postId) {
		let scoreUpdate = 1;

		await PostModel.updateOne(
			{ _id: postId },
			{
				$inc: { score: scoreUpdate },
			}
		);

		return "Increment post score";
	}
}

export default new UserSupport();
