import SendSuccessResponse from "../../helper/SendSuccessResponse.js";
import { TryCatch } from "../../helper/TryCatch.js";
import GetPostService from "./services/getPost.service.js";

class GetPostController {
	static getPost = TryCatch(async (req, res) => {
		const result = await GetPostService.getPost(req.params.id);

		SendSuccessResponse.send(res, {
			status: 201,
			message: "Post created Successful",
			data: result,
		});
	});
}

export default GetPostController;
