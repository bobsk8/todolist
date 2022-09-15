import { GenericEntity } from './generic.entity';
import { UserEntity } from './user.entity';

export class RoleEntity extends GenericEntity {
  public name: string;

  public users: UserEntity[];
}
