import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Services {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
}