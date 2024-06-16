// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigAppModule } from './config.module';
import { PrismaModule } from 'prisma/prisma.module'; // Ensure PrismaModule is created
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigAppModule, PrismaModule, AuthModule],
})
export class AppModule {}
