import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth') // Ensure this matches your route path in the frontend
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup') // Define the route for POST /auth/signup
  async signup(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.authService.signup(createUserDto);
      return user;
    } catch (error: any) {
      if (error.message === 'A user with this email already exists.') {
        throw new HttpException('User with this email already exists', HttpStatus.CONFLICT);
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
