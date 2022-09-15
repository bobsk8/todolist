import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/task.model';
import { BaseService } from './base/base.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService<Project> {
  protected path = 'project';
  protected url = environment.apiEndPoint;
  
  constructor(
    protected http: HttpClient
  ) { 
    super(http);
  }

  public addTask(projectId: number, task: any): Observable<Task> {
    return this.http.post(`${this.url}/project/${projectId}/task`, task, httpOptions)
      .pipe(
        catchError(err => {
          console.log('update project ', err);
          return throwError(err);
        })
      );
  }

  public updateTask(taskId: number, task: any): Observable<Task> {
    return this.http.put(`${this.url}/task/${taskId}`, task, httpOptions)
      .pipe(
        catchError(err => {
          console.log('updateTask project ', err);
          return throwError(err);
        })
      );
  }

  public deleteTask(taskId: number): Observable<Task> {
    return this.http.delete(`${this.url}/task/${taskId}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('updateTask project ', err);
          return throwError(err);
        })
      );
  }
}
