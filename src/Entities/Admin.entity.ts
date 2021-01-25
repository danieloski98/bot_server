import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export class Admin {

    @ApiProperty({
        name: 'id',
        type: String
    })
    @PrimaryGeneratedColumn("uuid")
    id: string;


    @ApiProperty({
        name: 'email',
        type: String
    })
    @Column()
    email: string;

    @ApiProperty({
        name: 'firstname',
        type: String
    })
    @Column()
    firstname: string;


    @ApiProperty({
        name: 'lastname',
        type: String
    })
    @Column()
    lastname: string;


    @ApiProperty({
        name: 'password',
        type: String
    })
    @Column()
    password: string;
    

    @ApiProperty({
        name: 'role',
        type: Number
    })
    @Column()
    role: number;
}