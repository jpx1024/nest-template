import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	let port = configService.get("server.port");
	await app.listen(port);
	console.log("服务正在监听端口<" + port + ">");
	
}
bootstrap();
