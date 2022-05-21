import { Request, Response } from "express";
import { connection } from "../connection";


export default async function editTeacher (
    req:Request,res:Response){
        try{

            const id: number = req.body.id 
            const classes: string = req.body.classes as string

            // console.log("campo modulo", id, "campo ID",classes )
            if(  classes === ""){ 
            res.status(400).send({
                message:"O campo não pode estar em branco"
            })}
            
        
            if(!id) {
                res.status(400).send({
                message :('Escolha o valor para alterar')
            })}

            await connection(`teacher`)
            .update({class_id: classes})
            .where({id: id})
        
        res.status(200).send({
            message: "Professor atualizado!"
    
        })
    }catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
      }
    }