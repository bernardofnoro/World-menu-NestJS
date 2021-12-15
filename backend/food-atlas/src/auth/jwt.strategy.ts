/**
 * file: jwt.strategy.ts
 * description: arquivo responsável pelos parâmetros do usuário necessários para validação
 * do Token.
 * data: 15/12/2021
 * author: Bernardo Freitas <bernardofn@outlook.com> & Chanely Marques <chanelym@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export interface JwtPayload {
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETKEY,
    });
  }
  validate(payload: JwtPayload) {
    return payload;
  }
}
