import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/user.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = environment.apiEndPoint;
  constructor(
    private http: HttpClient
  ) { }

  public save(project: Project): Observable<Project> {
    return this.http.post(`${this.url}/api/project`, project, httpOptions)
      .pipe(
        catchError(err => {
          console.log('save project ', err);
          return throwError(err);
        })
      );
  }

  public update(id: number, project: Project): Observable<Project> {
    return this.http.put(`${this.url}/api/project/${id}`, project, httpOptions)
      .pipe(
        catchError(err => {
          console.log('update project ', err);
          return throwError(err);
        })
      );
  }

  public getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/api/project`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getAll project ', err);
          return throwError(err);
        })
      );
  }

  public delete(projectId: number): Observable<Project> {
    return this.http.delete(`${this.url}/api/project/${projectId}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('delete project ', err);
          return throwError(err);
        })
      );
  }

  public getById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/api/project/${id}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getById project ', err);
          return throwError(err);
        })
      );
  }

  public addTask(projectId: number, task: any): Observable<Task> {
    return this.http.post(`${this.url}/api/project/${projectId}/task`, task, httpOptions)
      .pipe(
        catchError(err => {
          console.log('update project ', err);
          return throwError(err);
        })
      );
  }

  public updateTask(taskId: number, task: any): Observable<Task> {
    return this.http.put(`${this.url}/api/task/${taskId}`, task, httpOptions)
      .pipe(
        catchError(err => {
          console.log('updateTask project ', err);
          return throwError(err);
        })
      );
  }

  public deleteTask(taskId: number): Observable<Task> {
    return this.http.delete(`${this.url}/api/task/${taskId}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('updateTask project ', err);
          return throwError(err);
        })
      );
  }
}
