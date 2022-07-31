import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/core/services/login.service';
import { LoginDto } from 'src/app/dto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public submitted = false;
  public loginForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.createForm();
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
    this.loginService.login(loginDto)
    .subscribe(resp => {
      this.loginService.setCurrentUserSession(resp.user, resp.token);
      this.router.navigate(['main/project']);
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
