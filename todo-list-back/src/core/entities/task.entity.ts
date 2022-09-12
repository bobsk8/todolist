import { ProjectEntity } from "./project.entity";

export class TaskEntity {
  public description: string;

  public completed: boolean;

  public projectId: number;

  public project: ProjectEntity;

  public createdAt: Date;

  public updatedAt: Date;
}
