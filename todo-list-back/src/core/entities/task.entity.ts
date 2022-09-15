import { ITaskEntity } from '../abstracts/models/task-entity.interface';
import { GenericEntity } from './generic.entity';
import { ProjectEntity } from './project.entity';

export class TaskEntity extends GenericEntity implements ITaskEntity {
  public description: string;

  public completed: boolean;

  public projectId: number;

  public project: ProjectEntity;

  public createdAt: Date;

  public updatedAt: Date;
}
