import { Repository } from 'typeorm';

import { RoleEntity } from '../model';
import { GenericRepository } from './base/generic-repository';
import { IRoleRepository } from 'src/core';

export class RoleRepository
  extends GenericRepository<RoleEntity>
  implements IRoleRepository<RoleEntity>
{
  constructor(protected repository: Repository<RoleEntity>) {
    super(repository);
  }
}
