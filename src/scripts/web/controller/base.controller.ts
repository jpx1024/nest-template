import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Response } from '../../common/response';

@Controller()
export class BaseController {

    @Get()
    get(): Response {
        return Response.buildSuccess();
    }

    @Post()
    post(): Response {
        return Response.buildSuccess();
    }

    @Put()
    put(): Response {
        return Response.buildSuccess();
    }

    @Delete()
    delete(): Response {
        return Response.buildSuccess();
    }
}