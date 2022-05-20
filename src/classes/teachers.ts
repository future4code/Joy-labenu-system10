import user from "./user";

 export default class Teacher extends user {
     
   specialties: string;
   constructor(
    
    id: string,
    name: string,
    email: string,
    birth: string,
    class_id: string,
    specialties: string
){
  super(id, name, email, birth, class_id)
    this.specialties= specialties
}
}