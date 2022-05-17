import user from "./user"

export class students extends user {
    
hobby: string
constructor(
    hobby: string,
    id: string,
    name: string,
    email: string,
    birth_date: string,
    class_id: string
){
    super(id, name, email, birth_date, class_id)
        this.hobby = hobby
}
}