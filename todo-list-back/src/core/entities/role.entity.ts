import { IRoleEntity, IUserEntity } from '../interfaces';
import { GenericEntity } from './base/generic.entity';

export class RoleEntity extends GenericEntity implements IRoleEntity {
  public name: string;

  public users: IUserEntity[];
}
