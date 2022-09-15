import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto {
  public id: number;

  @ApiProperty({
    description: 'The name of project',
  })
  @IsString()
  public name: string;
}
