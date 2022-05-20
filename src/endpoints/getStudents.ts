import { Request, Response } from "express";
import moment from "moment";
import { connection } from "../connection";

export async function getStudents(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    
    const getAllStudents = await connection("students")
    .select()
    
    getAllStudents?.map((student)=>{

      const data = moment(student.birth, 'YYYY-MM-DD').format ('DD-MM-YYYY')
      student.birth = data
      return student
    })
    
    res.status(200).send(getAllStudents)
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }