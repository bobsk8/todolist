import { GenericEntity } from './generic.entity';
import { TaskEntity } from './task.entity';
import { UserEntity } from './user.entity';

export class ProjectEntity extends GenericEntity {
  public name: string;

  public userId: number;

  public tasks: TaskEntity[];

  public user: UserEntity;
}
