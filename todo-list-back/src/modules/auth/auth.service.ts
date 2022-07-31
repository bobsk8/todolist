import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { CredentialsDto } from './dto/credentials.dto';
import { User } from '../../models/user.model';
import { LoginUserDto } from './dto/login-user.dto';
import { passwordCompare } from 'src/shared/helpers';
import { generateHashToken } from './jwt-generate';
import { LogoutUserDto } from './logout-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
    ) { }

    public async validateUser(credentialsDto: CredentialsDto): Promise<User> {
        const { username, password } = credentialsDto;
        try {
            const user = await this.userService.findByUserName(username);

            if (!user) {
                return null;
            }

            const isValid = await passwordCompare(password, user.password);
            if (isValid) {
                return user;
            } else {
                return null;
            }
        } catch (err) {
            throw Error;
        }
    }

    public async login(credentialsDto: CredentialsDto): Promise<LoginUserDto> {
        try {            
            const user = await this.validateUser(credentialsDto);
            if (!user) {
                throw new Error;
            }            
            const token = generateHashToken(user.username);
            user.token = token;
            await this.userService.update(user.id, user);
            delete user.password;
            return new LoginUserDto(user, token);
        } catch (err) {
            throw new UnauthorizedException(`username or password is incorrect`);;
        }

    }

    public async logout(user: User): Promise<LogoutUserDto> {
        try {            
            return this.userService.removeToken(user.id);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }
}
