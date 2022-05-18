import { app } from "./app"
import { createClass } from "./endpoints/createClass"
import { createStudent} from "./endpoints/createStudent"

console.log("funcionando")

app.post("/CreateClass", createClass)

app.post("/CreateStudent", createStudent)