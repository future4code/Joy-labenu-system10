import { Request, Response } from "express";
import { v4 as idCreat } from 'uuid';
import { connection } from "../connection";

export async function createClass(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const { name, teachers, students, module } = req.body;
    if(!name){
      throw new Error("Você precisa informar um nome")
    };
    if(!teachers){
      throw new Error("Você precisa informar um professor ")
    };
    if(!students){
      throw new Error("Você precisa informar um estudante")
    };
    if(!module){
      throw new Error("Você precisa informar um modulo ")
    };

    const [checkClass] = await connection("class")
    .select("name")
    .where({"name": name})
        
    if(checkClass){
      throw new Error("Esta turma já existe, informe outra")
    }

    await connection("class")
    .insert({
    id:idCreat(),
    name,
    teachers,
    students,
    module
    })
    
    res.status(201).send("Turma criada com sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }