import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
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
        if (
          error.code === 'P2002' &&
          (error.meta?.target as string[])?.includes('email')
        ) {
          throw new Error('A user with this email already exists.');
        }
      }
      throw error;
    }
  }
}
