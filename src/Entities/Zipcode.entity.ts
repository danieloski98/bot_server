import { State } from 'joi';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { States } from './State.entity';

@Entity()
export class ZipCode {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: string;

    @ManyToOne(() => States, state => state.zipcodes)
    state: State;
}