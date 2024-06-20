// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../user/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(createUserDto: CreateUserDto) {
    const { firstName, lastName, email, password } = createUserDto;

    // Add logic to hash the password before saving (e.g., using bcrypt)
    // const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password, // Use hashedPassword here if you hash the password
        },
      });

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const target = error.meta?.target as string[] | undefined;
        if (error.code === 'P2002' && target && target.includes('email')) {
          // Handle unique constraint error
          throw new Error('A user with this email already exists.');
        }
      }
      throw error;
    }
  }
}
