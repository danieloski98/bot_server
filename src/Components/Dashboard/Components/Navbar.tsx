import React from 'react'
import { InputGroup, InputRightElement, InputLeftElement, Input } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi'
import useDetails from '../../../Hooks/useAdminDetails';


export const IconsHolder = (props) => <div className="flex items-center h-full ">{props.children}</div>;

const SearchBtn =() => {
    return (
        <div>
            <button className="text-xs text-white p-1 rounded h-8 mr-12 w-20 bg-green-500">Search</button>
        </div>
    )
}

const ProfileChip = () => {
    const { email, firstname, lastname } = useDetails();
    return (
        <section className="w-auto h-16 p-2 rounded border border-gray-200 flex">
            <div className="flex-1 flex flex-col mt-1">
                <h1 className="font-Rubik-Bold font-bold text-sm">{email}</h1>
                <p className="font-Rubik_Regular text-xs">{firstname} {lastname}</p>
            </div>

            <div className="w-10 h-10 mt-1 rounded-full bg-green-500"></div>
        </section>
    )
}

export default function Navbar() {
    return (
        <section className="w-full pl-10 pr-12 h-20 shadow-sm bg-white flex items-center justify-between">
            <div className="w-3/5">
                <InputGroup>
                    <InputLeftElement children={<IconsHolder><FiSearch size={20} color="#067E72" /></IconsHolder>}></InputLeftElement>
                    <Input variant="filled" placeholder="search"/>
                    <InputRightElement children={<SearchBtn />}></InputRightElement>
                </InputGroup>
            </div>

            <div className="flex-1 pl-10">
                <ProfileChip />
            </div>
        </section>
    )
}
