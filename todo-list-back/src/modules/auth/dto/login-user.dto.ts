import { User } from "src/models/user.model";

export class LoginUserDto {

    constructor(
        public user?: User,
        public token?: string
    ) { }
}
