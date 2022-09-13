import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'The firstName of user',
  })
  @IsString()
  public firstName: string;

  @ApiProperty({
    description: 'The lastName of user',
  })
  @IsString()
  public lastName: string;

  @ApiProperty({
    description: 'The cpf of user',
  })
  @IsString()
  public cpf: string;

  @ApiProperty({
    description: 'The cnpj of user',
  })
  @IsString()
  public cnpj: string;

  @ApiProperty({
    description: 'The cellPhone of user',
  })
  @IsString()
  public cellPhone: string;
}
