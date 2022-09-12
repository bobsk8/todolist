import { UserEntity } from "src/core/entities";

export class LoginUserDto {

    constructor(
        public user?: UserEntity,
        public token?: string
    ) { }
}
