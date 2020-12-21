import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ZipCode } from './Zipcode.entity';

@Entity()
export class States {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(() => ZipCode, zipcode => zipcode.state )
    zipcodes: [ZipCode];
}