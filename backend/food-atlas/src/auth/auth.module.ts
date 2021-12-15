/**
 * file: auth.module.ts
 * description: arquivo responsável pelos componentes que irão auxiliar o processo de Autenticação
 * data: 15/12/2021
 * author: Bernardo Freitas <bernardofn@outlook.com> & Chanely Marques <chanelym@gmail.com>
 */

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/app/users/users.service';
import { PrismaService } from 'src/plugins/prisma/prisma.service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: '300s', //Aqui é o tempo de duração do token de permissão.
      },
    }),
  ],
  providers: [UserService, PrismaService, AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
