import { app } from "./app"
import { createClass } from "./endpoints/createClass"
import { createStudent} from "./endpoints/createStudent"
import { createTeacher } from "./endpoints/createTeacher"
import editClassModule from "./endpoints/editClassModule"
import editStudent from "./endpoints/editStudent"
import editTeacher from "./endpoints/editTeacher"
import { getClasses } from "./endpoints/getClasses"
import { getStudents } from "./endpoints/getStudents"
import { getTeachers } from "./endpoints/getTeachers"

//entity teacher
app.get("/GetTeachers", getTeachers)
app.post("/CreateTeacher", createTeacher)
app.put("/EditTeacher", editTeacher)

//entity class
app.get("/GetClasses", getClasses)
app.post("/CreateClass", createClass)
app.put("/EditClassModule", editClassModule)

//entity student
app.get("/GetStudents", getStudents)
app.post("/CreateStudent", createStudent)
app.put("/EditStudent", editStudent)

