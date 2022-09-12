import { TaskEntity } from "./task.entity";
import { UserEntity } from "./user.entity";

export class ProjectEntity {
  public name: string;

  public userId: number;

  public tasks: TaskEntity[];

  public user: UserEntity;
}
