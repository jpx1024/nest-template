import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { MultiResponse, Response } from '../../common/response';
import { UserService } from '../../application/service/user.service';
import { UserPO } from '../../infrastructure/database/pojo/user.po';
import { UserCreateDTO, UserUpdateDTO } from 'src/scripts/application/pojo/user.dto';

/**
 * 用户控制器
 * @author ike jpx1024@gmail.com
 */
@Controller("user")
export class UserController {

    constructor(private userService: UserService){}

    /**
     * 获取列表
     */
    @Get("list")
    async getList(): Promise<MultiResponse<UserPO>> {
        let paginated = await this.userService.getPaginated();
        return MultiResponse.ofPaginated(paginated);
    }
    
    /**
     * 
     * @param dto 数据传输对象
     */
    @Post()
    async post(@Body() dto: UserCreateDTO): Promise<Response> {
        await this.userService.create(dto);
        return Response.buildSuccess();
    }

    /**
     * 
     * @param dto 数据传输对象
     */
    @Put()
    async put(@Body() dto: UserUpdateDTO): Promise<Response> {
        await this.userService.update(dto);
        return Response.buildSuccess();
    }

    /**
     * 
     * @param id 标识
     */
    @Delete(":id")
    async delete(@Param('id') id: number): Promise<Response> {
        return Response.buildSuccess();
    }
}