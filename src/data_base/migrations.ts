import { connection } from "../connection"


const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

const createTables = () =>
    connection
        .raw(
        `CREATE TABLE IF NOT EXISTS students (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR (255) NOT NULL,
            email VARCHAR(255)NOT NULL,
            birth DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL,
            hobbies VARCHAR(255) NOT NULL
      );

         CREATE TABLE IF NOT EXISTS teacher (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR (255) NOT NULL,
            email VARCHAR(255)NOT NULL,
            birth DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL,
            specialties VARCHAR(255) NOT NULL
      );
      
         CREATE TABLE IF NOT EXISTS class (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR (255) NOT NULL,
            teachers VARCHAR(255)NOT NULL,
            students VARCHAR(255) NOT NULL,
            module VARCHAR(255) NOT NULL
    );
      `
        )
        .then(() => {
            console.log("Tabelas criadas")
        })
        .catch(printError)

const closeConnection = () => {
    connection.destroy()
}

createTables().finally(closeConnection)