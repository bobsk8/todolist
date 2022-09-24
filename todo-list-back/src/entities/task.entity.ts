import { IProjectEntity, ITaskEntity } from '../core/interfaces';
import { GenericEntity } from './base/generic.entity';

export class TaskEntity extends GenericEntity implements ITaskEntity {
  public description: string;

  public completed: boolean;

  public projectId: number;

  public project: IProjectEntity;

  public createdAt: Date;

  public updatedAt: Date;
}
