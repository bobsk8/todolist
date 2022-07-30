import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto {

    id: number;

    @ApiProperty({
        description: 'The name of project',
    })
    @IsString()
    name: string;
}
