import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';

import configuration from './configuration';
import { TypeOrmOptions } from './scripts/config/typeorm.config';
import { JwtOptions } from './scripts/config/jwt.config';
import { UserService } from './scripts/application/service/user.service';
import { BaseController } from './scripts/web/controller/base.controller';
import { UserController } from './scripts/web/controller/user.controller';
import { UserRepository } from './scripts/infrastructure/database/repository/user.repository';
import { JwtAuthGuard } from './scripts/web/guard/auth.guard';
import { JwtStrategy } from './scripts/common/auth/jwt.strategy';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		}),

		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useClass: TypeOrmOptions
		}),

		TypeOrmModule.forFeature([UserRepository]),

		PassportModule,
		JwtModule.registerAsync({
			useClass: JwtOptions
		})
	],
	providers: [
		UserService,
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
		JwtStrategy
	],
	controllers: [
		BaseController,
		UserController
	],
})
export class AppModule { }
