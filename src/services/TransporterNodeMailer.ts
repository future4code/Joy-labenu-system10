
import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 secure: false,
 auth: {
 user: process.env.NODEMAILER_USER,
 pass: process.env.NODEMAILER_PASS
 },
 //Nao estava sendo enviado o e-mail, adicionei essa linha abaixo que peguei no Stack Over Flow e agora tá funcionando! :D
 tls: { rejectUnauthorized: false }
})
export default transporter