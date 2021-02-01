import React from 'react'
import { IListing } from '../../../types/listings'
import { Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi'
import EditListing from './Modals/EditListing'
import * as axios from 'axios';
import { useMutation, } from 'react-query';
import { IReturnType } from '../../../types/ReturnType'
import {URL} from '../../../types/Url'

export default function ListingCard(props: { item: IListing}) {
    const [showModal, setShowModal] = React.useState(false);

    const Mutation = useMutation(async(id: String) => {
        const request = await axios.default.delete(`${URL}/listings/${id}`);
        return  request.data as IReturnType;
    })

    React.useEffect(() => {
        if (Mutation.status === 'loading') {
            return;
        }
        if (Mutation.status === 'error') {
            alert(Mutation.error['response'].data.errorMessage);
            Mutation.reset();
        } else if (Mutation.status === 'success') {
            alert(Mutation.data.successMessage);
            Mutation.reset();
        }
    });

    // function
    const closeModal = () => {
        setShowModal(false);
    }

    const submit = async() => {
        console.log(props.item.id);
        Mutation.mutate(props.item.id);
    }

    return (
        <div className="w-72 h-64 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <EditListing item={props.item} closeModal={closeModal} showModal={showModal} />
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-700 text-xs rounded">{props.item.service_type}</p>
                        <Menu size="sm" colorScheme="teal" placement="bottom-start">
                            <MenuButton> <FiMoreVertical color="black" size={20} /></MenuButton>
                            <MenuList className="w-10" size="md">
                                <MenuItem icon={<FiEdit color="grey" size={15} />} command="Edit" checked onClick={() => setShowModal(true)} commandSpacing={0} iconSpacing={2} />
                                
                                <MenuItem icon={<FiTrash2 color="red" size={15} />} command="Delete" commandSpacing={0} iconSpacing={2} onClick={submit} />
                            </MenuList>
                        </Menu>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">{props.item.business_name}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.address}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.state}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.phone}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.address}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.email}</p>

                    {props.item.website !== null && (<p className="mt-2 font-Rubik-Regular text-sm">{props.item.website}</p>)}
        </div>
    )
}
