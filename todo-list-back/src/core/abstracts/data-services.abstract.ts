import { ProjectEntity, RoleEntity, TaskEntity, UserEntity } from '../entities';
import { IProjectRepository, IRoleRepository, ITaskRepository, IUserRepository } from './';

export abstract class IDataServices {
  public abstract projects: IProjectRepository<ProjectEntity>;

  public abstract roles: IRoleRepository<RoleEntity>;

  public abstract tasks: ITaskRepository<TaskEntity>;

  public abstract users: IUserRepository<UserEntity>;
}
