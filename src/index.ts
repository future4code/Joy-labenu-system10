import { app } from "./app"
import { createClass } from "./endpoints/createClass"
import { createStudent} from "./endpoints/createStudent"
import { createTeacher } from "./endpoints/createTeacher"
import editClassModule from "./endpoints/editClassModule"
import { getClasses } from "./endpoints/getClasses"
import { getStudents } from "./endpoints/getStudents"
import { getTeachers } from "./endpoints/getTeachers"

app.post("/CreateClass", createClass)
app.get("/GetClasses", getClasses)
app.put("/EditClassModule", editClassModule)

app.post("/CreateStudent", createStudent)
app.get("/GetStudents", getStudents)

app.post("/CreateTeacher", createTeacher)
app.get("/GetTeachers", getTeachers)