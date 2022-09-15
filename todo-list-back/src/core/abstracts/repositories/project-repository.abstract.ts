import { IGenericRepository } from '../base/generic-repository.abstract';

export abstract class IProjectRepository<T> extends IGenericRepository<T> {
  public abstract findByUserId(id: number): Promise<T[]>;
  public abstract findByIdAndUserId(id: number, userId: number): Promise<T>;
}
