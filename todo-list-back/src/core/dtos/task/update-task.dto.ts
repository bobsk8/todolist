import { IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsBoolean()
    completed: boolean;
}
