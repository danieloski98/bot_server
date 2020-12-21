import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export class Company {
    
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    website: string;

}