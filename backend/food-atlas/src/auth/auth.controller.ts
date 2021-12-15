/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService) {}

    @Post()
    async login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }

    @Get()
    @UseGuards(AuthGuard())
    async checkLogin(){
        return 'logado';
    }
}