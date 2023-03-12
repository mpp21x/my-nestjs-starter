import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from '@common/config/env';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	await app.listen(Env.APP_PORT);

	Logger.log(`App is running on: localhost:${Env.APP_PORT}`);
}

bootstrap();
