import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import { FiSearch, FiLock } from 'react-icons/fi'
import MemoryCard from '../Components/MemoryCard'

export const IconsHolder = (props) => <div className="flex items-center h-full ">{props.children}</div>;

export default function ServiceType() {
    return (
        <div className="w-full h-auto rounded bg-white p-8 flex flex-col">

        <div className="flex justify-between">

            <div className="flex-1 flex flex-col">
                <h1 className="text-xl font-Rubik-Bold font-bold">Bot Memory - Services</h1>
                <p className="font-Rubik_Regular text-xs">All the services registered in Zoe's Memory</p>
            </div>

            {/* <div className="flex-1 flex justify-end">
                <div className="">
                   <button className=" px-3 h-10 rounded bg-green-400 text-xs text-white font-Rubik_Regular">Add Service type</button>
                </div>
            </div> */}
        </div>

        <div className="w-full flex mt-5 p-5 bg-gray-100 rounded-md">
            <FiLock color="black"  size={30} className=""/>
            <p className="font-Rubik_Regular text-xs ml-4">
            Zoe's Memory allows her to quickly handle requests from users. Modifying this section might cause her to malfunction, You will not be able to add any data here at this time. You can only search for data here
            </p>
        </div>

        <div className="w-3/4  h-full grid grid-cols-2 gap-3 mt-10 ">
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
                <MemoryCard type="Service" />
            </div>

    </div>
    )
}
