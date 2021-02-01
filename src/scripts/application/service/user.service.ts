import { Injectable } from "@nestjs/common";

import { UserPO } from "../../infrastructure/database/pojo/user.po";
import { UserRepository } from "../../infrastructure/database/repository/user.repository";
import { UserCreateDTO, UserUpdateDTO } from "../pojo/user.dto";

/**
 * 用户服务
 * @author ike jpx1024@gmail.com
 */
@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
    ) { }

    async getList(): Promise<UserPO[]> {
        return await this.userRepository.find();
    }

    async create(dto: UserCreateDTO): Promise<any> {
        let po = new UserPO();
        po = Object.assign(po, dto)
        po.createTime = new Date();
        await this.userRepository.save(po);
    }

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