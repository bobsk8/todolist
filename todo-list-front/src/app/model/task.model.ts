import { Project } from "./project.model";

export class Task {
    constructor(
        public id?: number,
        public description?: string,
        public completed?: boolean,
        public project?: Project,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {
        this.project = new Project();
        this.completed = false;
     }
}
