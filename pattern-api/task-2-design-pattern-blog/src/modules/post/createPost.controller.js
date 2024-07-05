import SendSuccessResponse from "../../helper/SendSuccessResponse.js";
import { TryCatch } from "../../helper/TryCatch.js";
import createPostService from "./services/createPost.service.js";

class CreatePostController {
	static createPost = TryCatch(async (req, res) => {
		const result = await createPostService.createPost({
			title: req.body.title,
			description: req.body.description,
			userId: req.user.id,
		});

		SendSuccessResponse.send(res, {
			status: 201,
			message: "Post created Successful",
			data: result,
		});
	});
}

export default CreatePostController;
