import { Task } from './task.model';
import { Role } from './role.model';

export class User {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public cpf?: string,
        public cnpj?: string,
        public cellPhone?: string,
        public email?: string,
        public password?: string,
        public projects?: Task[],
        public roles?: Role[]
    ) {
        this.projects = [];
    }
}
