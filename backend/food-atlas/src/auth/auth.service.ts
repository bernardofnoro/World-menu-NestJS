/**
 * file: auth.service.ts
 * description: arquivo responsável pela geração do Token para o processo de Autenticação.
 * data: 15/12/2021
 * author: Bernardo Farias <bernardofn@outlook.com> & Chanely Marques <chanelym@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/app/users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginDto) {
    const user = await this.userService.findByLogin(loginUserDto);

    const token = this._createToken(user);

    return {
      email: user.email,
      ...token,
    };
  }

  private _createToken({ email }: LoginDto): any {
    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      accessToken,
    };
  }
}
