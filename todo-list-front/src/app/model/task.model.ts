import { Task } from './user.model';

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public tasks?: Task[]
    ) {
        this.tasks = [];
    }
}
