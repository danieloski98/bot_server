import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export class Admin {

    @PrimaryGeneratedColumn("uuid")
    id: string;


    @Column()
    email: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;


    @Column()
    password: string;
    

    @Column()
    role: number;
}