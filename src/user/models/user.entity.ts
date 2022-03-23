import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    // @Column({type: 'string', default: ""})
    // phoneNumber: string;

    // @Column({type: 'string', default: ""})
    // email: string;

    // @Column({ type: 'boolean', default: true })
    // rsvp: boolean;

}