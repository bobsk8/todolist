import { IUserEntity } from "./user-entity.interface";

export interface IRoleEntity {
    id: number;

    name: string;

    users: IUserEntity[];
}
