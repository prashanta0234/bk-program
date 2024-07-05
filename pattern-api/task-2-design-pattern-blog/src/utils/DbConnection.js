import mongoose from "mongoose";

// MongoDB connection URI
const uri =
	"mongodb+srv://ding-dong:ding_dong_0234@cluster0.wiwaonc.mongodb.net";

// Connect to MongoDB

class ConnectDB {
	static connect = async () => {
		try {
			await mongoose.connect(uri, {
				dbName: "learn-mongodb",
			});
			console.log("Connected to MongoDB");
		} catch (error) {
			console.error("MongoDB connection error:", error);
		}
	};
}

export default ConnectDB;
