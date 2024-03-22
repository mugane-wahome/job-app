import { Router } from "express";
import { checkSchema } from "express-validator";
import { resumeSchema } from "../myschemas/resumeSchema.js";
import { uploadresume} from "../controls/resumes.js";
import { requiredAuth } from "../middlewares/auth.js";


const resumeRouter = Router()

resumeRouter.post("/resume", requiredAuth, checkSchema(resumeSchema), uploadresume)


export default resumeRouter