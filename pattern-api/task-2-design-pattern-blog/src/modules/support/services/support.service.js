import { UserModel } from "../../../models/user.model.js";
import ScoreableFactory from "../factory/ScoreableFactory.js";

class SupportService {
	async makeSupport(userId, postId, authorId) {
		const data = await UserModel.findOne({ _id: userId }).select("isAdmin");

		const isAdmin = data.isAdmin;

		const ScoreableService = ScoreableFactory.create(isAdmin);

		if (!isAdmin) {
			const result = await ScoreableService.support(postId);
			return result;
		} else {
			const result = await ScoreableService.support(authorId);
			return result;
		}
	}
}

export default new SupportService();
