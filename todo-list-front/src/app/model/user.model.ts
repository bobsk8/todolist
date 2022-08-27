import { Task } from './task.model';
import { Role } from './role.model';

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public projects?: Task[],
        public roles?: Role[]
    ) {
        this.projects = [];
    }
}
