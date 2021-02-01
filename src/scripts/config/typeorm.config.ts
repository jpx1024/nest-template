import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get("nest.datasource.host"),
            port: this.configService.get<number>("nest.datasource.port"),
            username: this.configService.get("nest.datasource.username"),
            password: this.configService.get<string>("nest.datasource.password"),
            database: this.configService.get("nest.datasource.database"),
            entities: [__dirname + '/../**/*.po{.ts,.js}'],
            synchronize: true,
        };
    }
}