import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'The firstName of user',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'The lastName of user',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'The cpf of user',
  })
  @IsString()
  cpf: string;

  @ApiProperty({
    description: 'The cnpj of user',
  })
  @IsString()
  cnpj: string;

  @ApiProperty({
    description: 'The cellPhone of user',
  })
  @IsString()
  cellPhone: string;

  @ApiProperty({
    description: 'The email of user',
  })
  @IsString()
  email: string;
}
