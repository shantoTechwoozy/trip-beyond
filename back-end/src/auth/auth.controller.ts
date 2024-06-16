// src/auth/auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from 'src/user/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.authService.signup(createUserDto);
      return user;
    } catch (error) {
      if (error.message === 'A user with this email already exists.') {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }
}
