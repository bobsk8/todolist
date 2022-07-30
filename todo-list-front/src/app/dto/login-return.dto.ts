import { User } from '../model/task.model';

export class LoginReturnDto {
    constructor(
        public user: User,
        public token: string
    ) { }
}
