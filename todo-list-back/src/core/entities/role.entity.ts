import { IRoleEntity } from '../abstracts/models/role-entity.interface';
import { GenericEntity } from './generic.entity';
import { UserEntity } from './user.entity';

export class RoleEntity extends GenericEntity implements IRoleEntity {
  public name: string;

  public users: UserEntity[];
}
