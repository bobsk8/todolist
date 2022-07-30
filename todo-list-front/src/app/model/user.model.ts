export class Task {
    constructor(
        public id?: string,
        public description?: string,
        public completed?: boolean,
        public project?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) { }
}
