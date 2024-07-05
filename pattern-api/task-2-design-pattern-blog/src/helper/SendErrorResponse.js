class SendErrorResponse {
	static send(res, { status, message, error }) {
		return res.status(status).json({ ok: false, message, errorDetails: error });
	}
}

export default SendErrorResponse;
