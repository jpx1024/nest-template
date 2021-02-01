import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { Response } from '../response';
import { MultiResponse } from '../multi.response';
import { UserE } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@Controller("user")
export class UserController {

    constructor(private userService: UserService){}

    @Get("list")
    async getList(): Promise<MultiResponse<UserE>> {
        let data = await this.userService.getList();
        return MultiResponse.of(data, 0);
    }

    @Post()
    post(@Body() userE: UserE): Response {
        this.userService.create(userE);
        return Response.buildSuccess();
    }

    @Put()
    put(@Body() userE: UserE): Response {
        this.userService.update(userE);
        return Response.buildSuccess();
    }

    @Delete(":id")
    delete(@Param('id') id: number): Response {
        let userE = new UserE();
        userE.id = id;
        this.userService.remove(userE);
        return Response.buildSuccess();
    }
}