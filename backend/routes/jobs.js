import { Router } from "express";
import { checkSchema } from "express-validator";
import { jobsSchema } from "../myschemas/jobsSchema.js";
import { createjobs, getAllJobs, getSinglejob } from "../controls/jobs.js";
import { requiredAuth } from "../middlewares/auth.js";


const postRouter = Router()

postRouter.post("/jobs", requiredAuth, checkSchema(jobsSchema), createjobs)
postRouter.get("/alljobs", getAllJobs)
postRouter.get("/jobs/:id", getSinglejob)


export default postRouter