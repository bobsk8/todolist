import { GenericEntity } from './generic.entity';
import { ProjectEntity } from './project.entity';
import { RoleEntity } from './role.entity';

export class UserEntity extends GenericEntity {
  public id: number;

  public firstName: string;

  public lastName: string;

  public cpf: string;

  public cnpj: string;

  public cellPhone: string;

  public email: string;

  public active: boolean;

  public password: string;

  public projects: ProjectEntity[];

  public roles: RoleEntity[];
}
