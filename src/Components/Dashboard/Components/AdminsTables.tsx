import React from 'react'
import { Spinner } from '@chakra-ui/react'
import { IAdmintype } from '../../../types/Admin'
import {
    Table, Thead, Tbody, 
    Tr, Th, Td, Modal, ModalContent, ModalOverlay
} from "@chakra-ui/react";
import { FiTrash2 } from 'react-icons/fi'
import { useMutation } from 'react-query';
import * as axios from 'axios';
import { URL } from '../../../types/Url'
import useAdminDetails from '../../../Hooks/useAdminDetails';

interface IProps {
    loading: boolean;
    superAdmins?: Array<IAdmintype>;
    admins?: Array<IAdmintype>;
    refetch: Function;
}
function make (): void {}
// Modal
interface IModalProps {
    open: boolean;
    onClose: typeof make;
    email: string;
}
const LoadingModal = (props: IModalProps) => {
    return (
        <Modal isOpen={props.open} closeOnEsc closeOnOverlayClick onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <div className="w-full h-20 rounded flex flex-col justify-center items-center ">
                    <Spinner size="md" color="green.500" />
                    <p className="text-xs font-Rubik_Regular text-center font-semibold mt-3">Deleting admin with email {props.email}.</p>
                </div>
            </ModalContent>
        </Modal>
    );
}


export default function AdminsTables(props: IProps) {
    const [loading, setLoading] = React.useState(false);
    const [ email, setEmail] = React.useState('');
    const details = useAdminDetails();

    const Mutation = useMutation(async (value: string) => {
        const request = await axios.default.delete(`${URL}/admin/${value}`);
        return request.data;
    })

    React.useEffect(() => {
        if (Mutation.status === 'loading') {
            return;
        }
        if (Mutation.status === 'error') {
            Mutation.reset();
            alert(Mutation.error['response'].data.errorMessage);
        } else if (Mutation.status === 'success') {
            // update the details
            alert(Mutation.data.successMessage);
            Mutation.reset();
            
        }
    });

    const deleteAdmin = (id: string, email: string) => {
        setEmail(email);
        
        Mutation.mutate(id);
        props.refetch();
        setLoading(false);
    }


    return (
        <div className="flex-1 flex">
            <LoadingModal open={loading} onClose={() => setLoading(false)} email={email} />
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
                                                {
                                                    details.role === 1 && (
                                                        <Th isNumeric>Action</Th>
                                                    )
                                                }
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                props.admins.map((admin, index) => (
                                                    <Tr key={index}>
                                                        <Td className="text-xs font-Rubik_Regular">{admin.firstname} {admin.lastname}</Td>
                                                        <Td className="text-xs font-Rubik_Regular">{admin.email}</Td>
                                                        <Td textAlign="right" className="text-xs font-Rubik_Regular">{ admin.role === 1 ? 'Super Admin' : 'Admin'}</Td>
                                                        <Td textAlign="center">
                                                            {details.role === 1 && (
                                                                <FiTrash2 color='red' className="cursor-pointer" title={`delete ${admin.firstname}`} size={15} onClick={() => deleteAdmin(admin.id, admin.email)} />
                                                            )}
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
