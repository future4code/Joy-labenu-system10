import user from "./user";

 export default class teacher extends user {
     
   specialties: string;
   constructor(
    specialties: string,
    id: string,
    name: string,
    email: string,
    birth_date: string,
    class_id: string
){
  super(id, name, email, birth_date, class_id)
    this.specialties= specialties
}
}