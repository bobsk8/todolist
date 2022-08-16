import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { CredentialsDto } from './dto/credentials.dto';
import { User } from '../../models/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { passwordCompare } from 'src/shared/helpers';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
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
            const payload = { username: user.username, sub: user.id };
            delete user.password;
            const token = this.jwtService.sign(payload);
            return new LoginUserDto(user, token);
        } catch (err) {
            throw new UnauthorizedException(`username or password is incorrect`);;
        }

    }
}
