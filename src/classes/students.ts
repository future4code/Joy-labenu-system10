import user from "./user"

export class Students extends user {
    
hobbies: string
constructor(
   
    id: string,
    name: string,
    email: string,
    birth: string,
    class_id: string,
    hobby: string,
){
    super(id, name, email, birth, class_id)
        this.hobbies = hobby
}
}