import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertMessagesService } from 'src/app/core/services/alert-messages.service';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.css']
})
export class ProfileDescriptionComponent implements OnInit, OnDestroy {

  public photo: File;
  public submitted = false;
  public isLoading = false;
  public profileForm: UntypedFormGroup;
  private subs: Subscription[] = [];
  constructor(
    private userService: UserService,
    private fb: UntypedFormBuilder,
    private alertMessagesService: AlertMessagesService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.createForm(new User());
    this.getUser();
  }

  public onSubmit(form: UntypedFormGroup): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const user = Object.assign(new User(), form.value);
    this.save(user);
  }

  public ngOnDestroy(): void {
    this.subs.forEach(el => el.unsubscribe());
  }

  private getUser(): void {
    const sub = this.userService.getOwnUser()
      .subscribe(user => this.profileForm = this.createForm(user));
    this.subs.push(sub);
  }

  private save(user: User): void {
    this.isLoading = true;
    const sub = this.userService.create(user)
      .subscribe(() => {
        this.alertMessagesService.showSuccessAlert('Success!');
        this.isLoading = false;
      }, () => this.isLoading = false);
    this.subs.push(sub);
  }

  private createForm(user: User): UntypedFormGroup {
    return this.fb.group({
      firstName: [user.firstName || '', [Validators.required]],
      lastName: [user.lastName || '', [Validators.required]],
      cpf: [user.cpf || '', [Validators.required]],
      cnpj: [user.cnpj || '', [Validators.required]],
      cellPhone: [user.cellPhone || '', [Validators.required]],
      email: [user.email || '', [Validators.required, Validators.email]],
      password: [user.password || '', [Validators.required]],
    });
  }

}
