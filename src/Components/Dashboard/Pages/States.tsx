import React from 'react'
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { FiLock, FiSearch } from 'react-icons/fi'
import MemoryCard from '../Components/MemoryCard'

export default function States() {
    return (
        <div className="w-full h-auto rounded bg-white p-8 flex flex-col">

            <div className="flex justify-between">

                <div className="flex-1 flex flex-col">
                    <h1 className="text-xl font-Rubik-Bold font-bold">Bot Memory - States</h1>
                    <p className="font-Rubik_Regular text-xs">All the states registered in Zoe's Memory</p>
                </div>

                <div className="flex-1 flex justify-end">
                    <div className="w-72">
                        <InputGroup >
                            <InputLeftElement className="text-xl" children={<FiSearch color="black" size={30} />}></InputLeftElement>
                            <Input variant="filled" placeholder="search" />
                        </InputGroup>
                    </div>
                </div>
            </div>

            <div className="w-full flex mt-5 p-5 bg-gray-100 rounded-md">
                <FiLock color="black"  size={30} className=""/>
                <p className="font-Rubik_Regular text-xs ml-4">
                Zoe's Memory allows her to quickly handle requests from users. Modifying this section might cause her to malfunction, You will not be able to add any data here at this time. You can only search for data here
                </p>
            </div>

            <div className="w-3/4  h-full grid grid-cols-2 gap-3 mt-10 ">
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
                <MemoryCard />
            </div>

        </div>
    )
}
