import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './configuration';
import { TypeOrmConfig } from './scripts/config/typeorm.config';
import { UserService } from './scripts/service/user.service';
import { BaseController } from './scripts/controller/base.controller';
import { UserController } from './scripts/controller/user.controller';
import { UserE } from './scripts/entity/user.entity';


@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		}),
		
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useClass: TypeOrmConfig
		}),

		TypeOrmModule.forFeature([UserE])
	],
	providers: [
		UserService
	],
	controllers: [
		BaseController,
		UserController
	],
})
export class AppModule { }
