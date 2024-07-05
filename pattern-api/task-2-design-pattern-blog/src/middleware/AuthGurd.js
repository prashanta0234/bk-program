import { TryCatch } from "../helper/TryCatch.js";
import jwt from "jsonwebtoken";

class AuthGuard {
	static IsAuthenticated = TryCatch(async (req, __, next) => {
		// console.log(req.headers);
		const token = req.headers.authorization.replace("Bearer ", "");
		const jwtSecret = process.env.JWT_SECRET;

		const user = jwt.verify(token, jwtSecret);

		req.user = user;
		next();
	});
}

export default AuthGuard;
