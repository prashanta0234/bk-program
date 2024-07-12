import SendSuccessResponse from "../../helper/SendSuccessResponse.js";
import { TryCatch } from "../../helper/TryCatch.js";
import SupportService from "./services/support.service.js";

class SupportController {
	static support = TryCatch(async (req, res) => {
		const result = await SupportService.makeSupport(
			req.user.id,
			req.body.postId,
			req.body.authorId
		);

		SendSuccessResponse.send(res, {
			status: 201,
			message: "Created Successful",
			data: result,
		});
	});
}

export default SupportController;
