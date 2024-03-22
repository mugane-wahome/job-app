import {PrismaClient} from "@prisma/client"
import { matchedData, validationResult } from "express-validator"
import jwt from "jsonwebtoken"
const prisma = new PrismaClient()


const createjobs = async (req, res) => {
    console.log(req.body)
    try {
        const errors =  validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).send({ status: 'fail', errors}).end()
        }
        const data = matchedData(req);

        const newJob = await prisma.jobs.create({
            data: data
            //  {
            //     title: req.body.title,
            //     content: req.body.content,
            //     category : req.body.category
            // }
        })
        console.log(newJob)
        res.status(201).json(newJob)
    } catch (error) {
       console.log(error)
       res.status(500).send('Error creating post') 
    }
}

const getAllJobs = async (req, res) => {
    try {
        const jobs = await prisma.jobs.findMany()
        res.status(200).json(jobs)
    } catch (error) {
        res.status(500).send('Error fetching posts')
    }
}

const getSinglejob = async (req, res) => {
    try {
        const jobs = await prisma.jobs.findUnique({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(jobs)
    } catch (error) {
        
        res.status(500).send('Error fetching post')
    }
}

const updateJob = async () => {}
const deleteJob = async () => {}

export { createjobs, getAllJobs, getSinglejob}