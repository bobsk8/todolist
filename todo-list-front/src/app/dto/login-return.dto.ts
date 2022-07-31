import { User } from "../model/user.model";

export class LoginReturnDto {
    constructor(
        public user: User,
        public token: string
    ) { }
}
