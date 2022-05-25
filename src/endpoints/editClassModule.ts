import { Request, Response } from "express";
import { connection } from "../connection";


export default async function editClassModule (
    req:Request,res:Response){
        try{

            const module1: number = req.body.module1 
            const classId: string = req.body.classId as string

            console.log("campo modulo", module1, "campo ID",classId )
            if(  classId === ""){ 
            res.status(400).send({
                message:"O campo não pode estar em branco"
            })}
            
        
            if(!module1) {
                res.status(400).send({
                message :('Escolha o valor para alterar')
            })}

            await connection(`class`)
            .update({module: module1})
            .where({id: classId})
        
        res.status(200).send({
            message: "Modulo atualizado!"
    
        })
    }catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
      }
    }