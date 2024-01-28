import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/auth-login-dto';

  @Controller('auth')
  export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}
  
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() {email, password}: AuthLoginDTO ) {
    return this.authService.login(email, password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async create(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }
}
