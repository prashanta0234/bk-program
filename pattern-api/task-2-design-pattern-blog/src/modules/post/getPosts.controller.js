import SendSuccessResponse from "../../helper/SendSuccessResponse.js";
import { TryCatch } from "../../helper/TryCatch.js";
import GetPostsService from "./services/getPosts.service.js";

class GetPostsController {
	static getPosts = TryCatch(async (req, res) => {
		const result = await GetPostsService.getPosts();

		SendSuccessResponse.send(res, {
			status: 201,
			message: "Post created Successful",
			data: result,
		});
	});
}

export default GetPostsController;
