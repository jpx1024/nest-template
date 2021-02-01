import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import configuration from './configuration';
import { TypeOrmConfig } from './scripts/config/typeorm.config';
import { JwtConfig } from './scripts/config/jwt.config';
import { UserService } from './scripts/application/service/user.service';
import { BaseController } from './scripts/web/controller/base.controller';
import { UserController } from './scripts/web/controller/user.controller';
import { UserRepository } from './scripts/infrastructure/database/repository/user.repository';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		}),

		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useClass: TypeOrmConfig
		}),

		TypeOrmModule.forFeature([UserRepository]),

		PassportModule,
		JwtModule.registerAsync({
			useClass: JwtConfig
		})
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
