import { app } from "../app";
import {Request,Response} from "express"
import { connection } from "../connection";

app.post("/class", async (req:Request, res: Response) =>
{
  try {
    const {name,teacher ,student, module } = req.body;
    if( !name || !teacher || !student || !module){
      throw new Error("Os campos não podem estar vazios!")
    };
    
    await connection("class")
    .insert({
    id:idCreat(),
    name,
    teacher,
    student,
    module
    })

  res.status(201).send("Classe criada com Sucesso")

} catch (error: any) {
  res.status(400).send(error.message)
} });

function idCreat() {
    throw new Error("Function not implemented.");
}
