import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { Paginated } from "src/scripts/common/paginated";
import { UserPO } from "../../infrastructure/database/pojo/user.po";
import { UserRepository } from "../../infrastructure/database/repository/user.repository";
import { UserCreateDTO, UserUpdateDTO } from "../pojo/dto/user.dto";

/**
 * 用户服务
 * @author ike jpx1024@gmail.com
 */
@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    /**
     * 获取分页
     */
    async getPaginated(): Promise<Paginated<UserPO>> {
        let result = await this.userRepository.findAndCount();
        return Paginated.of(result);
    }

    /**
     * 创建
     * @param dto 数据传输对象
     */
    async create(dto: UserCreateDTO): Promise<any> {
        let po = new UserPO();
        po = Object.assign(po, dto)
        po.createTime = new Date();
        await this.userRepository.save(po);
    }

    /**
     * 更新
     * @param dto 数据传输对象
     */
    async update(dto: UserUpdateDTO): Promise<any> {
        let po = new UserPO();
        po = Object.assign(po, dto)
        await this.userRepository.update(po, {});
    }

    async remove(): Promise<any> {
    }

    async count(): Promise<number> {
        return await this.userRepository.count();
    }
}