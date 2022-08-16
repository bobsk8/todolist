import { User } from "src/models/user.entity";

export class LoginUserDto {

    constructor(
        public user?: User,
        public token?: string
    ) { }
}
