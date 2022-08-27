import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertMessagesService } from 'src/app/core/services/alert-messages.service';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: UntypedFormGroup;
  private subs: Subscription[] = [];
  public submitted = false;
  private isLoading = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: UntypedFormBuilder,
    private alertMessagesService: AlertMessagesService
  ) { }

  public ngOnInit(): void {
    this.registerForm = this.createForm();
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
    this.isLoading = true;
    const sub = this.userService.create(user)
      .subscribe(() => {
        this.alertMessagesService.showSuccessAlert('Success!');
        this.isLoading = false;
        this.router.navigate(['login']);
      }, () => this.isLoading = false);
    this.subs.push(sub);
  }

  private createForm(): UntypedFormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      cellPhone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
