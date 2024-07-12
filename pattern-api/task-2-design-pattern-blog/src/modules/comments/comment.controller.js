import SendSuccessResponse from "../../helper/SendSuccessResponse.js";
import { TryCatch } from "../../helper/TryCatch.js";
import CreateCommentService from "./service/createComment.service.js";

class CommentController {
	static crateComment = TryCatch(async (req, res) => {
		const result = await CreateCommentService.createComment({
			userId: req.user.id,
			postId: req.params.postId,
			content: req.body.content,
		});

		SendSuccessResponse.send(res, {
			status: 201,
			message: "Created Successful",
			data: result,
		});
	});
}

export default CommentController;
