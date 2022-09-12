import { RoleEntity } from '../model';
import { Repository } from 'typeorm';
import { GenericRepository } from './base/generic-repository';
import { IRoleRepository } from 'src/core/abstracts/role-repository.abstract';

export class RoleRepository extends GenericRepository<RoleEntity> implements IRoleRepository<RoleEntity> {

  constructor(
    protected repository: Repository<RoleEntity>
  ) {
    super(repository);
  }
}
