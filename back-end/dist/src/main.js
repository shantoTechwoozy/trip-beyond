"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') || 3001; // Adjust PORT as needed
    // Define your CORS options
    const corsOptions = {
        origin: true, // This should be set to the domains you want to allow
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify which methods are allowed
        allowedHeaders: ['Content-Type', 'Authorization'], // Specify which headers are allowed
    };
    // Enable CORS for all routes
    app.enableCors(corsOptions);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map