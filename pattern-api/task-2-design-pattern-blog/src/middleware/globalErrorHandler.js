import SendErrorResponse from "../helper/SendErrorResponse.js";

class GlobalErrorHandler {
	static handler(err, _, res, __) {
		let status = err.status || 500;
		let message = err.message || "something went wrong";
		return SendErrorResponse.send(res, { message, status, error: err });
	}
}

export default GlobalErrorHandler;
