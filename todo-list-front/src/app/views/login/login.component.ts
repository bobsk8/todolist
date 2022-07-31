import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginService } from 'src/app/core/services/login.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { LoginDto } from 'src/app/dto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public submitted = false;
  public loginForm: FormGroup;
  private subs: Subscription[] = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private storageService: StorageService
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.createForm();
  }

  public ngOnDestroy(): void {
    this.subs.forEach(el => el.unsubscribe());
  }

  public onSubmit(form: FormGroup): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const loginDto = Object.assign(new LoginDto(), form.value);
    this.login(loginDto);
  }

  private login(loginDto: LoginDto): void {
    const sub = this.loginService.login(loginDto)
    .subscribe(resp => {
      this.storageService.setCurrentUserSession(resp.user, resp.token);
      this.router.navigate(['main/project']);
    });
    this.subs.push(sub);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
