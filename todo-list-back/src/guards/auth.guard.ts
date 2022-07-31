import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];
    const userid = request.headers['userid'];

    if (authorization && userid) {
      const token = authorization.split(' ')[1];
      return this.userService.findUserByIdAndToken(token, userid)
        .then(user => {
          if (user) {
            request['user'] = user;
            return true;
          } else {
            return false;
          }
        }, err => { 
          return false;
        });
    } else {
      return false;
    }
  }
}
