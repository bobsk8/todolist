import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CredentialsDto {

    @ApiProperty({
        description: 'The username of user',
    })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({
        description: 'The password of user',
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}