import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/Entities/Admin.entity';
import { IReturnType } from 'src/types/ReturnType';
import { Return } from 'src/utils/ReturnObject';
import { Repository } from 'typeorm';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs'
import { Algorithm, sign } from 'jsonwebtoken'

@Injectable()
export class CrudService {
    logger = new Logger("Admin:CrudService");

    constructor(@InjectRepository(Admin) private adminRepo: Repository<Admin> ) {}

    async createAdmin(payload: Admin):Promise<IReturnType> {
        try {
            // check if an admin exist with that email
            const adminExist = await this.adminRepo.find({ where: { email: payload.email}});
            if (adminExist.length > 0) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Email already in use.'
                });
            }else {
                if (payload.role < 1 || payload.role > 2) {
                    return Return({
                        error: true,
                        statusCode: 400,
                        errorMessage: 'Invalid role'
                    })
                }
                if (payload.password.length < 8) {
                    return Return({
                        error: true,
                        statusCode: 400,
                        errorMessage: 'Password too short.'
                    })
                }
                // hash the password
                const salt = genSaltSync();
                const hash = hashSync(payload.password, salt);

                payload.password = hash;

                const savedUser = await this.adminRepo.save(payload);
                delete savedUser.password;

                return Return({
                    error: true,
                    statusCode: 200,
                    successMessage: 'Admin created',
                    data: savedUser,
                })

            }
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal Server error',
                trace: error
            });
        }
    }

    async login(payload: Admin): Promise<IReturnType> {
        try {
            const emailInUse = await this.adminRepo.find({ where: { email: payload.email }})
            if (emailInUse.length < 1) {
                this.logger.log("email not found");
                return Return({
                    error: true,
                    errorMessage: 'Invalid email or password',
                    statusCode: 400
                })
            } else {
                // check the password
                const passwordMatched = compareSync(payload.password, emailInUse[0].password);

                if (!passwordMatched) {
                    this.logger.log("Password did not match");

                    return Return({
                        error: true,
                        statusCode: 400,
                        errorMessage: 'invalid email or password'
                    })
                } else {
                    const algo: Algorithm = "HS512";
                    // generate JWT
                    const jwt = sign(payload, 'OEZTOB', { expiresIn: '3h', algorithm: algo});

                    return Return({
                        error: false,
                        statusCode: 200,
                        successMessage: 'Login successful',
                        data: {
                            token: jwt,
                        }
                    })
                }
            }
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal Server error',
                trace: error
            });
        }
    }
}
