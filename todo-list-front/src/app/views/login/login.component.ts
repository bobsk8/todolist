import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginDto } from 'src/app/dto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public submitted = false;
  public isLoading = false;
  public loginForm: UntypedFormGroup;
  private subs: Subscription[] = [];
  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.createForm();
  }

  public ngOnDestroy(): void {
    this.subs.forEach(el => el.unsubscribe());
  }

  public onSubmit(form: UntypedFormGroup): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const loginDto = Object.assign(new LoginDto(), form.value);
    this.login(loginDto);
  }

  private login(loginDto: LoginDto): void {
    this.isLoading = true;
    const sub = this.authService.login(loginDto)
      .subscribe(resp => {
        this.authService.setCurrentUserSession(resp.user, resp.token);
        this.isLoading = false;
        this.router.navigate(['main/project']);
      }, () => this.isLoading = false);
    this.subs.push(sub);
  }

  private createForm(): UntypedFormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
