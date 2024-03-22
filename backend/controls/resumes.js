import {PrismaClient} from "@prisma/client"
import { matchedData, validationResult } from "express-validator"
import jwt from "jsonwebtoken"
const prisma = new PrismaClient()


const uploadresume = async (req, res) => {
    console.log(req.body)
    try {
        const errors =  validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).send({ status: 'fail', errors}).end()
        }
        const data = matchedData(req);

        const newresume = await prisma.resumes.create({
            data: data
            //  {
            //     title: req.body.title,
            //     content: req.body.content,
            //     category : req.body.category
            // }
        })
        console.log(newresume)
        res.status(201).json(newresume)
    } catch (error) {
       console.log(error)
       res.status(500).send('Error uploading resume. Please try again.') 
    }
}


export { uploadresume}