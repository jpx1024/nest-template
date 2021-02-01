import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserPO } from "./user.po";

@Entity("role")
export class RolePO{

    /**
     * 标识
     */
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    /**
     * 名称
     */
    @Column()
    name: string;
}