import { UserEntity } from 'src/entities';

export class LoginUserDto {
  constructor(public user?: UserEntity, public token?: string) {}
}
