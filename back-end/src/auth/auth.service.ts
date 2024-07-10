import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma } from '@prisma/client';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  validateUser(arg0: { email: string; password: string; }) {
      throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  async signup(createUserDto: CreateUserDto) {
    const { firstName, lastName, email, password } = createUserDto;
    try {
      const user = await this.prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002' && (error.meta?.target as string[])?.includes('email')) {
          throw new Error('A user with this email already exists.');
        }
      }
      console.error('Signup error:', error); // Log the error for debugging
      throw new Error('Internal server error');
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}
