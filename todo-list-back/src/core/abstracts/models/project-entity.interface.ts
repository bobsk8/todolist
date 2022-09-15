import { ITaskEntity } from "./task-entity.interface";
import { IUserEntity } from "./user-entity.interface";

export interface IProjectEntity {
    name: string;

    userId: number;

    tasks: ITaskEntity[];

    user: IUserEntity;
}
