import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'

import configuration from './configuration';
import { BaseController } from './scripts/controller/base.controller';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		}),
	],
	controllers: [BaseController],
	providers: [],
})
export class AppModule { }
