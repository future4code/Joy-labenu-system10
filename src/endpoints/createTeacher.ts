import { Request, Response } from "express";
import { v4 as idCreat } from 'uuid';
import Teacher from "../classes/teachers";
import { connection } from "../connection";

export async function createTeacher(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const { name, email, birth, class_id,specialties } = req.body;
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!email){
      throw new Error("Você precisa informar um email ")
    };
    if(!birth){
      throw new Error("Você precisa informar uma data")
    };
    if(!class_id){
      throw new Error("Você precisa informar um id de classe ")
    };
    if(!specialties){
        throw new Error("Você precisa informar uma especialidade")
      };
    const [checkClass] = await connection("teacher")
    .select("name")
    .where({"name": name})
        
    if(checkClass){
      throw new Error("Este nome já existe, informe outro")
    }
    
    const newTeacher = new Teacher(
        idCreat(),
        name,
        email,
        birth,
        class_id,
        specialties,
    )

    await connection("teacher")
    .insert(newTeacher)
    
    res.status(201).send("Professor criado com sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }