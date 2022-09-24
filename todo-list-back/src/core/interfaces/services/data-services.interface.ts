export const I_DATA_SERVICE = 'I_DATA_SERVICE';

import {
  ProjectEntity,
  RoleEntity,
  TaskEntity,
  UserEntity,
} from '../../entities';
import {
  IProjectRepository,
  IRoleRepository,
  ITaskRepository,
  IUserRepository,
} from '../../interfaces';

export interface IDataServices {
  projects: IProjectRepository<ProjectEntity>;

  roles: IRoleRepository<RoleEntity>;

  tasks: ITaskRepository<TaskEntity>;

  users: IUserRepository<UserEntity>;
}
