import SendSuccessResponse from "../../helper/SendSuccessResponse.js";
import { TryCatch } from "../../helper/TryCatch.js";
import loginService from "./services/login.service.js";
import RegisterService from "./services/register.service.js";

class RegisterController {
	static register = TryCatch(async (req, res) => {
		const result = await RegisterService.userRegister(
			req.body.email,
			req.body.password,
			req.body.name
		);

		SendSuccessResponse.send(res, {
			status: 200,
			message: "User registration Successful",
			data: result,
		});
	});
}

export default RegisterController;
