import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {

    @ApiProperty({
        description: 'The description of task',
    })
    @IsString()
    public description: string;
}
