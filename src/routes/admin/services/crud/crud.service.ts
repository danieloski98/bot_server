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
            this.logger.log(payload);
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
                    delete emailInUse[0].password;
                    return Return({
                        error: false,
                        statusCode: 200,
                        successMessage: 'Login successful',
                        data: {
                            token: jwt,
                            user: emailInUse[0]
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

    async updateAdmin(id: string, payload: Partial<Admin>): Promise<IReturnType> {
        try {
            const adminExist = await this.adminRepo.find({ where: { id }});
            if (adminExist.length < 1) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Admin Not found.'
                })
            } else {
                delete payload.email;
                delete payload.role;

                const updated = await this.adminRepo.update(id, payload);
                this.logger.log(updated.affected);
                return Return({
                    error: true,
                    statusCode: 200,
                    successMessage: updated.affected > 0 ? "Updated successfully" : "Please try again",
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

    async getAdminById(id: string): Promise<IReturnType> {
        try {
            const exists = await this.adminRepo.find({ where: { id }});
            if (exists.length < 1) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Admin not found',
                });
            } else {
                delete exists[0].password;
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: 'Admin found',
                    data: exists[0],
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

    async getAllAdmins(): Promise<IReturnType> {
        try {
            const allAdmins = await this.adminRepo.find();
            allAdmins.map(admin => {
                delete admin.password
            });
            return Return({
                error: false,
                statusCode: 200,
                data: allAdmins,
            })
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal Server error',
                trace: error
            });
        }
    }

    async updatePassword(id: string, payload: {oldPassword: string, newPassword: string}): Promise<IReturnType> {
        try {
            const adminByid = await this.adminRepo.find({ where: { id }});
            if (adminByid.length < 1) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Admin not found.',
                })
            } else {
                // compare passwords
                const passwordmatch = compareSync(payload.oldPassword, adminByid[0].password);
                if (!passwordmatch) {
                    return Return({
                        error: true,
                        statusCode: 400,
                        errorMessage: 'Passwords do no match'
                    })
                } else {
                    // the password
                    const comparePass = compareSync(payload.newPassword, adminByid[0].password);
                    if (comparePass) {
                        return Return({
                            error: true,
                            statusCode: 400,
                            errorMessage: 'Cannot use the old password as the new one'
                        })
                    }
                    // hash the password
                    const salt = genSaltSync();
                    const hash = hashSync(payload.newPassword, salt);
                    const updated = await this.adminRepo.update(id, { password: hash });
                    this.logger.log(updated);
                    return Return({
                        error: false,
                        statusCode: 200,
                        successMessage: updated.affected > 0 ? 'Password updated successfully' : 'not updated, try again'
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

    async deleteAdmin(adminId: string): Promise<IReturnType> {
        try {
            // check for the admin
            const adminExist = await this.adminRepo.find({ where: {id: adminId }});
            if (adminExist.length < 1) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Admin not found',
                })
            }else {
                const deleted = await this.adminRepo.delete(adminId);
                this.logger.log(deleted);
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: `Admin with email ${adminExist[0].email} deleted`
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

}
