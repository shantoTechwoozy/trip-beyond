import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3001; // Adjust PORT as needed

  // Define your CORS options
  const corsOptions: CorsOptions = {
    origin: true, // This should be set to the domains you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify which methods are allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify which headers are allowed
  };

  // Enable CORS for all routes
  app.enableCors(corsOptions);

  await app.listen(port);
}

bootstrap();
