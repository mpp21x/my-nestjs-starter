import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as OpenApiValidator from 'express-openapi-validator';
import { getOpenapiYamlPath } from '@common/openapi/get-openapi-yaml-path';
import { APP_FILTER } from '@nestjs/core';
import { OpenApiExceptionFilter } from '@common/openapi/openapi-exception.filter';
import { ThrottlerModule } from '@nestjs/throttler';
import { env } from '@common/config/env';

@Module({
	imports: [
		ThrottlerModule.forRoot({
			/** `ttl`: the number of seconds that each request will last in storage*/
			ttl: env<number>('THROTTLE_TTL', 60),
			/**
			 * `limit`: the maximum number of requests within the TTL limit
			 * 這裡有一點需注意，實測後發現 `limit` 的數字除以 4 後才是實際可以發出 Req 的次數，例如預設 180，則代表可以在 TTL 的時間內存取 (180 / 4)  = 45次。
			 * 原因不明，可能需要看 Source Code
			 */
			limit: env<number>('THROTTLE_LIMIT', 240),
		}),
	],
	controllers: [AppController],
	providers: [
		AppService,
		{ provide: APP_FILTER, useClass: OpenApiExceptionFilter },
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void {
		consumer
			.apply(
				...OpenApiValidator.middleware({
					apiSpec: getOpenapiYamlPath('api.yml'),
					validateRequests: {
						allowUnknownQueryParameters: true,
						coerceTypes: false,
					},
					validateResponses: true,
					validateFormats: 'full',
				}),
			)
			.forRoutes('*');
	}
}
