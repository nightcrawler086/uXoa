import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen(3033);
}
bootstrap();
