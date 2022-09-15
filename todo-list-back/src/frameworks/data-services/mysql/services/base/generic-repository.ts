import { Repository } from 'typeorm';

export abstract class GenericRepository<T> {
  constructor(protected repository: Repository<T>) {}

  public getAll(): Promise<T[]> {
    return this.repository.find();
  }

  public get(id: any): Promise<T> {
    return this.repository.findOne(id);
  }

  public create(item: T): Promise<T> {
    return this.repository.save(item);
  }

  public update(id: number, item: T) {
    return this.repository.save({ id, ...item });
  }

  public delete(id: number) {
    return this.repository.delete(id);
  }
}
