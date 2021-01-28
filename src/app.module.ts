import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import configuration from './configuration';
import { BaseController } from './scripts/controller/base.controller';

@Module({
	imports: [
		ConfigModule.forRoot({
			// envFilePath: ['.env.development', '.env.production'],
			load: [configuration]
		}),
	],
	controllers: [BaseController],
	providers: [],
})
export class AppModule { }
