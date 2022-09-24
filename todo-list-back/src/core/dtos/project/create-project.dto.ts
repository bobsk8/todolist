import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/entities';

export class CreateProjectDto {
  @ApiProperty({
    description: 'The name of project',
  })
  @IsString()
  public name: string;

  public user: UserEntity;
}
