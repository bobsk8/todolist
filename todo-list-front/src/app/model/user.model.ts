import { Task } from './task.model';

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public projects?: Task[]
    ) {
        this.projects = [];
    }
}
