import { IProjectEntity } from './project-entity.interface';
import { IRoleEntity } from './role-entity.interface';

export interface IUserEntity {
  id: number;

  firstName: string;

  lastName: string;

  cpf: string;

  cnpj: string;

  cellPhone: string;

  email: string;

  active: boolean;

  password: string;

  projects: IProjectEntity[];

  roles: IRoleEntity[];
}
