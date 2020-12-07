import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listing {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: string;

    @Column()
    address: string;

    @Column()
    zip_code: string;

    @Column()
    service_type: string;
}