import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
class Admin {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    email: string;


    @Column()
    password: string;
    

    @Column()
    role: number;
}