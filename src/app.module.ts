import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as OpenApiValidator from 'express-openapi-validator';
import { getOpenapiYamlPath } from '@common/openapi/get-openapi-yaml-path';
import { join } from 'path';
import { APP_FILTER } from '@nestjs/core';
import { OpenApiExceptionFilter } from '@common/openapi/openapi-exception.filter';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [
		AppService,
		{ provide: APP_FILTER, useClass: OpenApiExceptionFilter },
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void {
		let a = 1;
		consumer
			.apply(
				...OpenApiValidator.middleware({
					apiSpec: getOpenapiYamlPath('openapi.yml'),
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
