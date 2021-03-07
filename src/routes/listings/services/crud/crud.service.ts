import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidationResult } from 'joi';
import { Listing } from 'src/Entities/Listing.entity';
import { IReturnType } from 'src/types/ReturnType';
import { Return } from 'src/utils/ReturnObject';
import { Repository } from 'typeorm';
import { ListingschemaValidator } from '../../../../utils/ListingValidator';

@Injectable()
export class CrudService {
    logger = new Logger('CRUDService');

    constructor(@InjectRepository(Listing) private listingRepo: Repository<Listing>) {}

    async addListing(payload: Listing): Promise<IReturnType> {
        try {
            // validate the payload
            const validation: ValidationResult = ListingschemaValidator.validate(payload);

            if (validation.error) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: validation.error.message,
                });
            } else {
                // add it to the databases
                const newEntry = await this.listingRepo.insert(payload);
                this.logger.log(newEntry);
                
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: 'Listing added successfully',
                });
            }
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
        }
    }

    async getServices(payload: Partial<Listing>): Promise<IReturnType> {
        try {
            // find the services
            const services = await this.listingRepo.find({ where: payload });

            if (services.length < 1) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'No service found'
                });
            } else {
                return Return({
                    error: true,
                    statusCode: 200,
                    data: services,
                    successMessage: 'Services found',
                });
            }
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
        }
    }


    async getApprovedListings(offset: number): Promise<IReturnType> {
        try {
            const listings = await this.listingRepo.find({ where: { approved: true }});

            
            // send the first 6
            if (listings.length <= 6) {
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: 'Listings found',
                    data: {
                        remaining: 0,
                        page: 1,
                        listings
                    }
                })
            }else {
                if (listings.length <= offset) {
                    return Return({
                        error: false,
                        statusCode: 400,
                        errorMessage: 'No more results'
                    })
                }else if (listings.length < offset + 6) {
                    const data = listings.slice(offset);
                    return Return({
                        error: false,
                        statusCode: 200,
                        successMessage: 'Listings found',
                        data: {
                            remaining: 0,
                            offset,
                            listings: data,
                        }
                    }) 
                }
                const data = listings.slice(offset, offset + 6);
                const remain = listings.slice(offset, listings.length - 1);
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: 'Listings found',
                    data: {
                        remaining: remain.length,
                        page: 1,
                        listings: data
                    }
                })
            }
            
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
        }
    }



    async getListings(offset: number): Promise<IReturnType> {
        try {
            const listings = await this.listingRepo.find({ where: {approved: false}});

            // send the first 6
            if (listings.length <= 6) {
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: 'Listings found',
                    data: {
                        remaining: 0,
                        page: 1,
                        listings
                    }
                })
            }else {
                if (listings.length <= offset) {
                    return Return({
                        error: false,
                        statusCode: 400,
                        errorMessage: 'No more results'
                    })
                }else if (listings.length < offset + 6) {
                    const data = listings.slice(offset);
                    return Return({
                        error: false,
                        statusCode: 200,
                        successMessage: 'Listings found',
                        data: {
                            remaining: 0,
                            offset,
                            listings: data,
                        }
                    }) 
                }
                const data = listings.slice(offset, offset + 6);
                const remain = listings.slice(offset, listings.length - 1);
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: 'Listings found',
                    data: {
                        remaining: remain.length,
                        page: 1,
                        listings: data
                    }
                })
            }
            
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
        }
    }
 


    async approveListing(id: string): Promise<IReturnType> {
        try {
            // check for the listing
            const listing = await this.listingRepo.find({ where: {id}});
            if (listing.length < 1) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Listing not found',
                });
            }else if (listing[0].approved) {
                return Return({
                    error: false,
                    statusCode: 200,
                    successMessage: `${listing[0].business_name} already approved to offer ${listing[0].service_type} services `,
                });
            }

            // update the listing
            const update = await this.listingRepo.update(id, {approved: true});
            this.logger.log(update);

            return Return({
                error: false,
                statusCode: 200,
                successMessage: `Approved ${listing[0].business_name} to offer ${listing[0].service_type} services `,
            });
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
        }
    }

    async declineListing(id: string): Promise<IReturnType> {
        try {
            const listing = await this.listingRepo.find({ where: {id}});
            if (listing.length < 1) {
                return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Listing not found'
                })
            }

            const del = await (await this.listingRepo.delete(id));
            this.logger.log(del);
            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'Listing declined',
            })
        } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
        }
    }


     async bulkApproval(): Promise<IReturnType> {
         try {
             const listings = await this.listingRepo.update({approved: false}, {approved: true});
             this.logger.log(listings);
             return Return({
                 error: false,
                 statusCode: 200,
                 successMessage: 'Approved all listings'
             })
         } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
         }
     }


     async bulkDecline(): Promise<IReturnType> {
         try {
            const listings = await this.listingRepo.delete({approved: false});
            this.logger.log(listings);
            return Return({
                error: false,
                statusCode: 200,
                successMessage: 'Approved all listings'
            })
         } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
         }
     }


     async editlisting(id: string, payload: Listing): Promise<IReturnType> {
         try {
             const exist = await this.listingRepo.find({ where: { id }});
             if (exist.length < 1) {
                 return Return({
                    error: true,
                    statusCode: 400,
                    errorMessage: 'Listing not found'
                 });
             }else {
                 const update = await this.listingRepo.update({id}, payload);
                 this.logger.log(update);
                 return Return({
                     error: false,
                     statusCode: 200,
                     successMessage: 'saved successfully'
                 })
             }
         } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
         }
     }

     async getListing2AtATime(offset: number, body: any): Promise<IReturnType> {
         try {
             this.logger.log(body);
             const listings = await this.listingRepo.find({ where: {approved: false, ...body}});
             if (listings.length < 1) {
                 return Return({
                     error: false,
                     statusCode: 200,
                     successMessage: 'No Listing found!'
                 })
             }else if (listings.length > 0 ) {
                 // check the size of the array
                 const size = listings.length;
                 if (offset > size) {
                     return Return({
                         error: false,
                         statusCode: 200,
                         successMessage: 'Listing found',
                         data: listings,
                     })
                 }else {
                     if (listings[offset + 2] === null || listings[offset + 2] === undefined || listings[offset] === undefined) {

                         const data = listings.slice(offset - 1);
                         const remaining =listings.slice(offset + 2).length;

                         return Return({
                            error: false,
                            statusCode: 200,
                            successMessage: data.length < 1 ? 'No listing found':'Listings found',
                            data: {
                                remaining,
                                data,
                            }
                        })
                     }
                     const data = listings.slice(offset, offset + 2);
                     const remaining =listings.slice(offset + 2).length;

                     return Return({
                         error: false,
                         statusCode: 200,
                         successMessage: data.length < 1 ? 'No listing found':'Listings found',
                         data: {
                             remaining,
                             data,
                         }
                     })
                 }
             }
             
         } catch (error) {
            return Return({
                error: true,
                statusCode: 500,
                errorMessage: 'Internal server error',
                trace: error,
            });
         }
     }
    

}
