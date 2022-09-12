import { Repository } from 'typeorm';

export abstract class GenericRepository<T> {
  constructor(
    protected repository: Repository<T>,
    protected populateOnFind: Object = {}
  ) { }

  getAll(): Promise<T[]> {
    return this.repository.find(this.populateOnFind);
  }

  get(id: any): Promise<T> {
    return this.repository.findOne(id);
  }

  create(item: T): Promise<T> {
    return this.repository.save(item);
  }

  update(id: number, item: T) {
    return this.repository.save({ id, ...item });
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}
