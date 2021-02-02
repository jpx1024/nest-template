import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { MultiResponse, SingleResponse, Response } from '../../common/response';
import { UserService } from '../../application/service/user.service';
import { UserPO } from '../../infrastructure/database/pojo/user.po';
import { UserLoginDTO, UserCreateDTO, UserUpdateDTO } from 'src/scripts/application/pojo/dto/user.dto';
import { Public } from 'src/scripts/common/web/pubilc.decorator';
import { CurrentUser } from 'src/scripts/common/decorator';
import { AuthDTO } from 'src/scripts/application/pojo/dto/auth.dto';

/**
 * 用户控制器
 * @author ike jpx1024@gmail.com
 */
@Controller("user")
export class UserController {

    constructor(private userService: UserService){}

    /**
     * 登录
     * @param dto 数据传输对象
     */
    @Public()
    @Post("login")
    async login(@Body() dto: UserLoginDTO): Promise<SingleResponse<AuthDTO>> {
        let authDto = await this.userService.login(dto);
        return SingleResponse.of(authDto);
    }

    @Get("test")
    async test(@CurrentUser() data){
        console.log(data)

    }

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