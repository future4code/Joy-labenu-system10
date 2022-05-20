import { Request, Response } from "express";
import moment from "moment";
import { connection } from "../connection";

export async function getTeachers(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    
    const getAllTeachers = await connection("teacher")
    .select()
    
    getAllTeachers?.map((teacher)=>{
        const data = moment(teacher.birth, 'YYYY-MM-DD').format ('DD-MM-YYYY')
        teacher.birth = data
    })

    res.status(200).send(getAllTeachers.flat(1))
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }