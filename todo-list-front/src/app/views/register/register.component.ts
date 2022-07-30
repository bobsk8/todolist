import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/model/task.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  userForm: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.userForm = this.createForm();
  }

  public onSubmit(form: FormGroup): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const user = Object.assign(new User(), form.value);
    this.save(user);
  }

  private save(user: User): void {
    this.userService.create(user)
    .subscribe(resp => {
      alert('Salvo com sucesso!');
      this.router.navigate(['login']);
    }, err => alert(err.error.message));
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
