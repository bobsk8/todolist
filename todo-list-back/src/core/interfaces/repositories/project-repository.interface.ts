import { IGenericRepository } from '../base/generic-repository.abstract';

export interface IProjectRepository<T> extends IGenericRepository<T> {
  findByUserId(id: number): Promise<T[]>;

  findByIdAndUserId(id: number, userId: number): Promise<T>;
}
