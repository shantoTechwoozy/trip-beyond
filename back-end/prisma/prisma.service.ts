// src/prisma/prisma.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    super({
      datasources: {
        db: {
          url: process.env.MONGODB_URI,
        },
      },
    });
  }
}
