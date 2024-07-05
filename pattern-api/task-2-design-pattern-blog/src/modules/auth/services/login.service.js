import jsonwebtoken from "jsonwebtoken";
import { AppError } from "../../../helper/AppError.js";
import { UserModel } from "../../../models/user.model.js";
import bcrypt from "bcrypt";

class LoginService {
	async userLogin(email, password) {
		const isExists = await UserModel.findOne({
			email: email,
		});

		if (!isExists) {
			throw new AppError("User not registered", 404);
		}

		const matchPass = bcrypt.compare(password, isExists.password);
		if (!matchPass) {
			throw new AppError("Password not matched", 400);
		}

		const payload = {
			id: isExists._id,
		};
		const jwtSecret = process.env.JWT_SECRET;

		const refreshToken = jsonwebtoken.sign(payload, jwtSecret, {
			expiresIn: "30d",
		});
		const accessToken = jsonwebtoken.sign(payload, jwtSecret, {
			expiresIn: "15m",
		});

		return { refreshToken, accessToken };
	}
}

export default new LoginService();
