// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3001;

  // Enable CORS for all origins (replace with specific origin if needed)
  app.use(cors());

  await app.listen(port, '0.0.0.0');
}

bootstrap();
