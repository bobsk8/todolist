import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/core/entities';

export class CreateProjectDto {

    @ApiProperty({
        description: 'The name of project',
    })
    @IsString()
    name: string;

    user: UserEntity;
}
