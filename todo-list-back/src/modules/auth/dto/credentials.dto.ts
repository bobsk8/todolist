import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CredentialsDto {

    @ApiProperty({
        description: 'The email of user',
    })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({
        description: 'The password of user',
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}