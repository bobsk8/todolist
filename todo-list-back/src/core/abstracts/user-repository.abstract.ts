import { IGenericRepository } from "./base/generic-repository.abstract";

export abstract class IUserRepository<T> extends IGenericRepository<T> {
  public abstract getByEmail(email: string): Promise<T>;
  public abstract getAllUsersPagination(skip: number, take: number, order: any): Promise<T[]>;
}
