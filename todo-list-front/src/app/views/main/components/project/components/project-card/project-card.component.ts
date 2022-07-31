import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() public project = new Project();
  @Output() public removeProjectEvent = new EventEmitter();
  @Output() public setDoneTask = new EventEmitter();
  @Output() public removeTaskEvent = new EventEmitter();
  @Output() public saveTaskEvent = new EventEmitter();

  public task: Task;

  constructor() { }

  public ngOnInit(): void {
    this.task = new Task();
  }

  public removeProject(id: number): void {
    this.removeProjectEvent.emit(id);
  }

  public setDoneT(project: Project, task: Task): void {
    this.setDoneTask.emit({ project, task });
  }

  public editTask(task: Task): void {
    this.task = { ...task };
  }

  public removeTask(project: Project, id: string): void {
    this.removeTaskEvent.emit({ project, id });
  }

  public saveTask(project: Project, task: Task): void {
    if (!task.id) {
      task.project.id = project.id;
    }
    this.saveTaskEvent.emit({ task, project });
    this.task = new Task();
  }

}
