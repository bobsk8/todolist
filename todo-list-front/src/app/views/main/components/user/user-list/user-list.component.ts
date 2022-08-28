import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public offset = 0;
  public limit = 10;
  public isLoading = false;
  public users: User[] = [];
  private subs: Subscription[] = [];
  constructor(
    private userService: UserService
  ) { }

  public ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    const sub = this.userService.getAll()
    .subscribe(users => this.users = users);
    this.subs.push(sub);
  }

  public ngOnDestroy(): void {
    this.subs.forEach(el => el.unsubscribe());
  }

  handler(index: number) {
    if ((index + 7) === this.users.length) {
      this.offset = this.limit + this.offset;
      this.getNextUsers(this.offset);
    }
  }

  public getNextUsers(offset: number): void {
    const sub = this.userService.getAll(offset)
    .subscribe(users => this.users = [...this.users, ...users]);
    this.subs.push(sub);
  }

  public deactivateOrActiveUser(user: User): void {
    const sub = this.userService.update(user.id, user)
    .subscribe(() => user);
    this.subs.push(sub);
  }

}
