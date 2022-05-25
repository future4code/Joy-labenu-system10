import { Request, Response } from "express";
import { v4 as idCreat } from 'uuid';
import { connection } from "../connection";

export async function getClasses(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    
    const getAllClasses = await connection("class")
    
    .select()
    
    res.status(200).send(getAllClasses)
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }