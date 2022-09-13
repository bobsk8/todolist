import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Project } from 'src/app/model/project.model';
import { Task } from 'src/app/model/task.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = environment.apiEndPoint;
  constructor(
    private http: HttpClient
  ) { }

  public save(projectId: number, task: any): Observable<Task> {
    return this.http.post(`${this.url}/task/project/${projectId}`, task, httpOptions)
      .pipe(
        catchError(err => {
          console.log('update project ', err);
          return throwError(err);
        })
      );
  }
}
