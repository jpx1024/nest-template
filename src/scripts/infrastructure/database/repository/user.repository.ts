import { EntityRepository, Repository } from "typeorm";

import { UserPO } from "../pojo/user.po";

@EntityRepository(UserPO)
export class UserRepository extends Repository<UserPO> {

}