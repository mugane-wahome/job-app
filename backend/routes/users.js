import { Router } from "express";

import { checkSchema } from "express-validator";

import { createUser, login, logout } from "../controls/users.js";
import { loginSchema, signupSchema } from "../myschemas/userSchema.js";
const userRouter = Router();

userRouter.post("/signup", checkSchema(signupSchema), createUser);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/loggedIn", )
export default userRouter;
