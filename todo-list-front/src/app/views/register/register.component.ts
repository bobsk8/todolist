import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  submitted = false;
  userForm: UntypedFormGroup;
  private subs: Subscription[] = [];
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: UntypedFormBuilder
  ) { }

  public ngOnInit(): void {
    this.userForm = this.createForm();
  }

  public ngOnDestroy(): void {
    this.subs.forEach(el => el.unsubscribe());
  }

  public onSubmit(form: UntypedFormGroup): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const user = Object.assign(new User(), form.value);
    this.save(user);
  }

  private save(user: User): void {
    const sub = this.userService.create(user)
      .subscribe(() => {
        alert('Success!');
        this.router.navigate(['login']);
      }, err => alert(err.error.message));
    this.subs.push(sub);
  }

  private createForm(): UntypedFormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
