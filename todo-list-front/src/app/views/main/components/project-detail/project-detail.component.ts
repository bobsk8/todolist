import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  public edit = false;
  public submitted = false;
  public projectForm: FormGroup;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.projectForm = this.createForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProjectById(parseInt(id, 10));
    }
  }

  public createForm(): FormGroup {
    return this.fb.group({
      id: [],
      name: ['', Validators.required]
    });
  }

  public onSubmit(form: FormGroup): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const project = Object.assign(new Project(), form.value);
    if (this.edit) {
      this.editProject(project);
    } else {
      this.saveProject(project);
    }
  }

  public getProjectById(id: number): void {
    this.projectService.getById(id)
    .subscribe(resp => {
      this.projectForm.get('name').setValue(resp.name);
      this.projectForm.get('id').setValue(resp.id);
      this.edit = true;
    });
  }

  private saveProject(project: Project): void {
    this.projectService.save(project)
    .subscribe(() => {
      alert('Project save!');
      this.router.navigate(['main/project']);
    });
  }

  private editProject(project: Project): void {
    this.projectService.update(project.id, project)
    .subscribe(() => {
      alert('Project update!');
      this.router.navigate(['main/project']);
    });
  }

}
