import express from "express";
import userRouter from "./routes/users.js";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import resumeRouter from "./routes/resume.js";
import postRouter from "./routes/jobs.js";


dotenv.config();
const prisma = new PrismaClient();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    },
  })
);


app.use(userRouter);
app.use(resumeRouter);
app.use(postRouter)


const port = 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
