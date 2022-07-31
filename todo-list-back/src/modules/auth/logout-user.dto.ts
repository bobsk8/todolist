import { User } from "src/models/user.model";

export class LogoutUserDto {

    constructor(
        public isLogout?: boolean
    ) {
        this.isLogout = true;
     }
}
