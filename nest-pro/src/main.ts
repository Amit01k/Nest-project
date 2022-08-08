import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function amit() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
amit();
