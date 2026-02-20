import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { snapshot } from 'node:test';

async function bootstrap() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL);

  const app = await NestFactory.create(AppModule, { snapshot: true });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
