import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {

  public projects: Project[] = [];
  private subs: Subscription[] = [];
  constructor(
    private projectService: ProjectService
  ) { }

  public ngOnInit(): void {
    this.getProjects();
  }

  public ngOnDestroy(): void {
    this.subs.forEach(el => el.unsubscribe());
  }

  public onSubmit(event: any): void {
    const project = event.project;
    const task = event.task;
    if (!task.description) {
      return;
    }
    if (task.id) {
      this.updateTask(project, task);
    } else {
      this.saveTask(project, task);
    }
  }

  public saveTask(project: Project, task: Task): void {
    const sub = this.projectService.addTask(project.id, task)
      .subscribe(resp => {
        project.tasks.push(resp);
      });
    this.subs.push(sub);
  }

  public updateTask(project: Project, task: Task): void {
    const sub = this.projectService.updateTask(task.id, task)
      .subscribe(() => {
        project.tasks.forEach(ts => {
          if (ts.id === task.id) {
            ts.description = task.description;
          }
        });
      });
    this.subs.push(sub);
  }

  public getProjects(): void {
    const sub = this.projectService.getAll()
      .subscribe(resp => this.projects = resp);
  }

  public removeProject(projectId: number): void {
    const isRemove = confirm('Are you sure about that?');
    if (!isRemove) {
      return;
    }
    const sub = this.projectService.delete(projectId)
      .subscribe(() => this.projects = this.projects.filter(project => project.id !== projectId));
    this.subs.push(sub);
  }

  public removeTask(event: any): void {
    const isRemove = confirm('Are you sure about that?');
    if (!isRemove) {
      return;
    }
    const project = event.project;
    const id = event.id;
    const sub = this.projectService.deleteTask(id)
      .subscribe(() => {
        project.tasks = project.tasks.filter(task => task.id !== id);
      });
    this.subs.push(sub);
  }

  public setDoneTask(event: any): void {
    const project = event.project;
    const task = event.task;
    task.completed = true;
    task.updatedAt = new Date();
    const sub = this.projectService.updateTask(task.id, task)
      .subscribe(() => {
        project.tasks.forEach(ts => {
          if (ts.id === task.id) {
            ts = task;
          }
        });
        project.taskDescription = '';
      });
    this.subs.push(sub);
  }

}
