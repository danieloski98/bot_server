import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listing {

    @ApiProperty({
        type: Number,
        required: false
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        type: String
    })
    @Column()
    state: string;

    @ApiProperty({
        type: String
    })
    @Column()
    address: string;

    @ApiProperty({
        type: String
    })
    @Column()
    zip_code: string;

    @ApiProperty({
        type: String
    })
    @Column()
    service_type: string;
}