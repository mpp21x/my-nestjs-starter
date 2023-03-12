import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

type Body = {
	name: string;
};

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post()
	printHello(
		@Body()
		body: Body,
		@Res() res: Response,
	): void {
		console.log(body);
		res.status(HttpStatus.OK).send(body);
	}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}
