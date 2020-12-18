import React from 'react'
import { InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import RequestCard from '../../Dashboard/Components/RequestCard'

export default function Request() {
    return (
        <div className="w-full h-auto bg-white rounded px-5 pt-6">

            <div className="w-full h-24 flex mt-5 mb-5">

                <div className="flex-1 flex flex-col">
                    <h1 className="font-Rubik-Bold text-xl font-bold">Requests (50)</h1>
                    <p className="text-xs font-Rubik_Regular">Businesses requesting to be listed on Zoe's Database. Please verify the data before approving</p>
                </div>

                <div className="flex justify-end mt-2">
                    
                    <div className="w-64">
                    <InputGroup>
                        <InputLeftElement children={<FiSearch size={30} color="#067E72" />} />
                        <Input variant="filled" placeholder="Quick Search"></Input>
                    </InputGroup>
                    </div>

                    <div className="w-32 ml-3">
                        <Select placeholder="Action">
                            <option>Approve All</option>
                            <option>Declined All</option>
                        </Select>
                    </div>

                </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-3 pb-10">
                    <RequestCard />
                    <RequestCard />
                    <RequestCard />
                    <RequestCard />
                    <RequestCard />
                    <RequestCard />
                    <RequestCard />
                    <RequestCard />
            </div>

        </div>
    )
}
