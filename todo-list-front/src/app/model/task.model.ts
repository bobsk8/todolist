import { Task } from './user.model';

export class User {
    constructor(
        public id?: string,
        public name?: string,
        public tasks?: Task[]
    ) {}
}
