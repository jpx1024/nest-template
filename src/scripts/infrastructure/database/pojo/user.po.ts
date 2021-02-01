import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { RolePO } from './role.po';

/**
 * 用户持久对象
 * @author ike jpx1024@gmail.com
 */
@Entity("user")
export class UserPO {

    /**
     * 标识
     */
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    /**
     * 名称
     */
    @Column()
    name: string;

    /**
     * 账号
     */
    @Column()
    username: string;

    /**
     * 密码
     */
    @Column()
    password: string;

    /**
     * 创建时间
     */
    @CreateDateColumn({ name: "create_time" })
    createTime: Date;

    /**
     * 角色列表
     */
    @ManyToMany(() => RolePO)
    @JoinTable({name: "user_role", joinColumn: {name: "user_id"}, inverseJoinColumn: {name: "role_id"}})
    roles: RolePO[];
}