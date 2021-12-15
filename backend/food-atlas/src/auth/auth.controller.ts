/**
 * file: jwt.strategy.ts
 * description: arquivo responsável pela configuração de navegação do usuário no sistema.
 * data: 15/12/2021
 * author: Bernardo Farias <bernardofn@outlook.com> & Chanely Marques <chanelym@gmail.com>
 */

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService ) { }

    @Post()
    async login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }

    @Get()
    @UseGuards(AuthGuard())
    async checkLogin() {
        return 'logado';
    }
}
