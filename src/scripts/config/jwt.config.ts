import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";
import { jwtConstants } from "../common/auth/constants";

export class JwtOptions implements JwtOptionsFactory{

    createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions> {
        return jwtConstants;
    }

}