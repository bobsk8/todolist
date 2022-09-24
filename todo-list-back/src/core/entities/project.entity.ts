import { IProjectEntity, ITaskEntity, IUserEntity } from '../interfaces';
import { GenericEntity } from './base/generic.entity';

export class ProjectEntity extends GenericEntity implements IProjectEntity {
  public name: string;

  public userId: number;

  public tasks: ITaskEntity[];

  public user: IUserEntity;
}
