import React from 'react'
import { Spinner } from '@chakra-ui/react'
import { IAdmintype } from '../../../types/Admin'
import {
    Table, Thead, Tbody, 
    Tr, Th, Td, 
} from "@chakra-ui/react";
import { FiTrash2 } from 'react-icons/fi'

interface IProps {
    loading: boolean;
    superAdmins?: Array<IAdmintype>;
    admins?: Array<IAdmintype>;
}


export default function AdminsTables(props: IProps) {
    return (
        <div className="flex-1 flex">
            {
                props.loading ?
                (
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <Spinner color="green.500" size="xl" />
                    </div>
                ):
                (
                    <div className="flex-1 mt-3">
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>User</Th>
                                    <Th>Email Address</Th>
                                    <Th isNumeric>Role</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    props.superAdmins.map((admin, index) => (
                                        <Tr key={index}>
                                            <Td className="text-xs font-Rubik_Regular">{admin.firstname} {admin.lastname}</Td>
                                            <Td className="text-xs font-Rubik_Regular">{admin.email}</Td>
                                            <Td textAlign="right" className="text-xs font-Rubik_Regular">{ admin.role === 1 ? 'Super Admin' : ''}</Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>

                        <div className="mt-6 w-full">
                            {
                                props.admins.length < 1 ?
                                <h1 className="text-center font-Rubik_Medium text-xl text-red-500">There are no Admins</h1>
                                :
                                <div className="">
                                     <Table variant="simple">
                                        <Thead>
                                            <Tr>
                                                <Th>User</Th>
                                                <Th>Email Address</Th>
                                                <Th isNumeric>Role</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                props.admins.map((admin, index) => (
                                                    <Tr key={index}>
                                                        <Td className="text-xs font-Rubik_Regular">{admin.firstname} {admin.lastname}</Td>
                                                        <Td className="text-xs font-Rubik_Regular">{admin.email}</Td>
                                                        <Td textAlign="right" className="text-xs font-Rubik_Regular">{ admin.role === 1 ? 'Super Admin' : 'Admin'}</Td>
                                                        <Td>
                                                            <FiTrash2 color='red' size={15} />
                                                        </Td>
                                                    </Tr>
                                                ))
                                            }
                                        </Tbody>
                                    </Table>
                                </div>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}
