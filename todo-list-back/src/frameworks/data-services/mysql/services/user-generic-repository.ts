import { UserEntity } from '../model';
import { Repository } from 'typeorm';
import { GenericRepository } from './base/generic-repository';
import { IUserRepository } from 'src/core/abstracts/user-repository.abstract';

export class UserRepository
  extends GenericRepository<UserEntity>
  implements IUserRepository<UserEntity>
{
  constructor(protected repository: Repository<UserEntity>) {
    super(repository);
  }

  public getByEmail(email: string): Promise<UserEntity> {
    return this.repository.findOne({
      where: { email },
      relations: {
        roles: true,
      },
    });
  }

  public getAllUsersPagination(
    skip = 0,
    take = 10,
    order: any = { id: 'DESC' },
  ): Promise<UserEntity[]> {
    return this.repository.find({
      order,
      skip,
      take,
    });
  }
}
