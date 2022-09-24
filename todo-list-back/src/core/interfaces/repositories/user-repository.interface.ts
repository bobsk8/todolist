import { IGenericRepository } from '../base/generic-repository.abstract';

export interface IUserRepository<T> extends IGenericRepository<T> {
  getByEmail(email: string): Promise<T>;

  getAllUsersPagination(skip: number, take: number, order: any): Promise<T[]>;
}
