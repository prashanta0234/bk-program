class SendSuccessResponse {
	static send(res, { status, data, message }) {
		return res
			.status(status)
			.json({ ok: true, message, statusCode: status, data });
	}
}

export default SendSuccessResponse;
