import SendSuccessResponse from "../../helper/SendSuccessResponse.js";
import { TryCatch } from "../../helper/TryCatch.js";
import loginService from "./services/login.service.js";

class LoginController {
	static login = TryCatch(async (req, res) => {
		console.log(req.user);
		const result = await loginService.userLogin(
			req.body.email,
			req.body.password
		);
		res.cookie("refresh", result.refreshToken, {
			httpOnly: true,
			sameSite: "None",
			secure: true,
			maxAge: 24 * 60 * 60 * 1000,
		});

		SendSuccessResponse.send(res, {
			status: 200,
			message: "User login successful",
			data: result,
		});
	});
}

export default LoginController;
