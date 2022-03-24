import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn("uuid", { name: "account_id" })
    id!: number;

    @CreateDateColumn({ name: "created_at", type: "timestamp" })
    createdAt!: Date;

    @Column("text", { name: "name" })
    name!: string;

    @Column("text", { unique: true, name: "email" })
    email!: string;

    @Column("text", { unique: true, name: "phoneNumber" })
    phoneNumber!: string;

    @Column("boolean", { name: "rsvp" })
    rsvp!: boolean;
}