import express, { Router } from "express";
import GlobalErrorHandler from "./src/middleware/globalErrorHandler.js";
import RegisterController from "./src/modules/auth/register.controller.js";
import ConnectDB from "./src/utils/DbConnection.js";
import AuthGuard from "./src/middleware/AuthGurd.js";
import dotenv from "dotenv";
import LoginController from "./src/modules/auth/login.controller.js";
import GetPostController from "./src/modules/post/getPost.controller.js";
import CreatePostController from "./src/modules/post/createPost.controller.js";
import GetPostsController from "./src/modules/post/getPosts.controller.js";

dotenv.config();
// import postRoutes from "./routes/postRoutes";

const app = express();

app.use(express.json());

app.post("/register", RegisterController.register);
app.post("/login", LoginController.login);
app.get("/post/:id", GetPostController.getPost);
app.get("/posts", GetPostsController.getPosts);

app.use(AuthGuard.IsAuthenticated);
app.post("/post", CreatePostController.createPost);

app.get("/", (req, res) => {
	res.json({
		message: "ok",
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	ConnectDB.connect();
	console.log(`Server is running on port ${PORT}`);
});

app.use(GlobalErrorHandler.handler);
