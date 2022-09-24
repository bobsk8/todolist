import { IProjectEntity, IRoleEntity, IUserEntity } from '../core/interfaces';
import { GenericEntity } from './base/generic.entity';

export class UserEntity extends GenericEntity implements IUserEntity {
  public id: number;

  public firstName: string;

  public lastName: string;

  public cpf: string;

  public cnpj: string;

  public cellPhone: string;

  public email: string;

  public active: boolean;

  public password: string;

  public projects: IProjectEntity[];

  public roles: IRoleEntity[];
}
