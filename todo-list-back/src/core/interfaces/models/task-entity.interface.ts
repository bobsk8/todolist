import { IProjectEntity } from './project-entity.interface';

export interface ITaskEntity {
  id: number;

  description: string;

  completed: boolean;

  projectId: number;

  project: IProjectEntity;

  createdAt: Date;

  updatedAt: Date;
}
