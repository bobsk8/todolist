import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { User } from 'src/models/user.model';

export class CreateProjectDto {

    @ApiProperty({
        description: 'The name of project',
    })
    @IsString()
    name: string;

    user: User;
}
