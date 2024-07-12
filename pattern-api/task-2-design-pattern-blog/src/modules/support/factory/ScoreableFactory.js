import AdminSupport from "../services/adminSupport.service.js";
import UserSupport from "../services/userSupport.service.js";

class ScoreableFactory {
	create(type) {
		switch (type) {
			case true:
				return AdminSupport;
			case false:
				return UserSupport;
			default:
				throw new Error("Invalid scorable type");
		}
	}
}

export default new ScoreableFactory();
