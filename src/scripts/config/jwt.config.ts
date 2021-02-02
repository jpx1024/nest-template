import { Injectable } from "@nestjs/common";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";
import { jwtConstants } from "../common/constants";

@Injectable()
export class JwtOptions implements JwtOptionsFactory {

    constructor(){}

    createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions> {
        return jwtConstants;
    }

}