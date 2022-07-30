import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/user.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() public project = new Project();
  @Output() public removeProject = new EventEmitter();
  @Output() public setDoneTask = new EventEmitter();
  @Output() public editTask = new EventEmitter();
  @Output() public removeTask = new EventEmitter();
  @Output() public saveTask = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public removeP(id: number): void {
    this.removeProject.emit(id);
  }

  public setDoneT(project: Project, task: Task): void {
    this.setDoneTask.emit({ project, task });
  }

  public editT(project: Project, task: Task): void {
    this.editTask.emit({ project, task });
  }

  public removeT(project: Project, id: string): void {
    this.removeTask.emit({ project, id });
  }

  public saveT(project: Project): void {
    this.saveTask.emit({ project });
  }

}
