export abstract class IGenericRepository<T> {
  public abstract getAll(): Promise<T[]>;

  public abstract get(id: number): Promise<T>;

  public abstract create(item: T): Promise<T>;

  public abstract update(id: number, item: T): Promise<T>;

  public abstract delete(id: number): Promise<T>;
}
