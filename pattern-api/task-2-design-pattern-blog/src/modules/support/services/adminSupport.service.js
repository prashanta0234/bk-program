import { UserModel } from "../../../models/user.model.js";

class AdminSupport {
	async support(authorId) {
		let scoreUpdate = 1;

		await UserModel.updateOne(
			{ _id: authorId },
			{
				$inc: { reputation: scoreUpdate },
			}
		);

		return "Increment author reputation";
	}
}

export default new AdminSupport();
