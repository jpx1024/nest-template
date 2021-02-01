import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserE } from "../entity/user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserE)
        private userRepository: Repository<UserE>,
    ) { }

    async getList(): Promise<UserE[]> {
        return await this.userRepository.find();
    }

    create(userE: UserE): any {
        userE.createTime = new Date();
        console.log(userE)
        this.userRepository.save(userE);
    }

    update(userE: UserE): any {

    }

    remove(userE: UserE): any {
        
    }
}