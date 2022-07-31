import { Task } from './task.model';

export class Project {
    constructor(
        public id?: number,
        public name?: string,
        public tasks?: Task[]
    ) {
        this.tasks = [];
    }
}
