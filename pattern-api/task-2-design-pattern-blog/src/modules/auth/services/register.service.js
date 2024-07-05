import { AppError } from "../../../helper/AppError.js";
import { UserModel } from "../../../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class RegisterService {
	async userRegister(email, password, name) {
		const isExists = await UserModel.findOne({
			email: email,
		});

		if (isExists) {
			throw new AppError("User already exists", 409);
		}

		const hash = await bcrypt.hash(password, 10);

		const createUser = await UserModel.create({
			email: email,
			password: hash,
			name,
		});

		const user = {
			id: createUser._id,
			name: createUser.name,
			email: createUser.email,
		};

		return user;
	}
}

export default new RegisterService();
