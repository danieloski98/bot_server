import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listing {

    @ApiProperty({
        type: Number,
        required: false
    })
    @PrimaryGeneratedColumn("uuid")
    id: string;

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

    @ApiProperty({
        type: String
    })
    @Column()
    email: string;

    @ApiProperty({
        type: String
    })
    @Column()
    phone: string;

    @ApiProperty({
        type: String,
        required: false
    })
    @Column()
    website: string;

    @ApiProperty({
        type: String,
        required: false
    })
    @Column()
    business_name: string;

    @Column()
    accepted: boolean;
}