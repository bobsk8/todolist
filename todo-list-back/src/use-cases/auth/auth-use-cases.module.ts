import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants, JwtStrategy } from 'src/common/helpers';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { AuthFactoryService } from './auth-factory.service';
import { AuthUseCases } from './auth.use-case';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: 33600,
      },
    }),
    DataServicesModule,
  ],
  providers: [AuthFactoryService, AuthUseCases, JwtStrategy],
  exports: [AuthFactoryService, AuthUseCases],
})
export class AuthUseCasesModule {}
