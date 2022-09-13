import { IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {

    @ApiProperty()
    @IsString()
    public description: string;

    @ApiProperty()
    @IsBoolean()
    public completed: boolean;
}
