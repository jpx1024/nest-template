import { EntityRepository, Repository } from "typeorm";

import { UserPO } from "../pojo/user.po";

/**
 * 用户存储库
 * @author ike jpx1024@gmail.com
 */
@EntityRepository(UserPO)
export class UserRepository extends Repository<UserPO> {
}