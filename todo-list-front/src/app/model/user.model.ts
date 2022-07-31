import { Task } from './task.model';

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public token?: string,
        public tasks?: Task[]
    ) {
        this.tasks = [];
    }
}
