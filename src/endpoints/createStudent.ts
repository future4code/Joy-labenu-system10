import { Request, Response } from "express";
import { v4 as idCreat } from 'uuid';
import { connection } from "../connection";

export async function createStudent(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const { name, email, birth, class_id,hobbies } = req.body;
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
    if(!hobbies){
        throw new Error("Você precisa informar um hobby")
      };
    const [checkClass] = await connection("students")
    .select("name")
    .where({"name": name})
        
    if(checkClass){
      throw new Error("Este nome já existe, informe outro")
    }

    await connection("students")
    .insert({
    id:idCreat(),
    name,
    email,
    birth,
    class_id,
    hobbies,
    })
    
    res.status(201).send("Estudante criado com sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }