import { IGenericRepository } from '../base/generic-repository.interface';

export interface IProjectRepository<T> extends IGenericRepository<T> {
  findByUserId(id: number): Promise<T[]>;

  findByIdAndUserId(id: number, userId: number): Promise<T>;
}
