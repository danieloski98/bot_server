import React from 'react'
import { InputGroup, InputRightElement, InputLeftElement, Input } from '@chakra-ui/react';

const SearchBtn =() => {
    return (
        <div>
            <button className="text-xs text-white p-1 rounded h-8 mr-12 w-20 bg-green-700">Saerch</button>
        </div>
    )
}

const ProfileChip = () => {
    return (
        <section className="w-64 h-16 p-2 rounded border border-gray-200 flex">
            <div className="flex-1 flex flex-col">
                <h1 className="font-Rubik-Bold font-bold text-md">daniel@gmail.com</h1>
                <p className="font-Rubik_Regular text-xs">Daniel Emmanuel</p>
            </div>

            <div className="w-10 h-10 mt-1 rounded-full bg-green-700"></div>
        </section>
    )
}

export default function Navbar() {
    return (
        <section className="w-full px-12 h-20 shadow-sm bg-white flex items-center justify-between">
            <div className="w-3/5">
                <InputGroup>
                    <InputLeftElement></InputLeftElement>
                    <Input variant="filled" placeholder="search"/>
                    <InputRightElement children={<SearchBtn />}></InputRightElement>
                </InputGroup>
            </div>

            <ProfileChip />
        </section>
    )
}
