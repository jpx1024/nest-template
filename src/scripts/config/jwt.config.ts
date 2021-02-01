import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";

export class JwtConfig implements JwtOptionsFactory{

    createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions> {
        return {
            secret: "123456",
            signOptions: {
                expiresIn: "60s"
            }
        };
    }

}