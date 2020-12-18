import { InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import ListingCard from '../Components/ListingCard'

export default function Listings() {
    return (
        <div className="w-full h-auto flex flex-col bg-white px-5 pt-6 rounded pb-8">
            <div className="w-full h-24 flex mt-5 mb-5">

                <div className="flex-1 flex flex-col">
                    <h1 className="font-Rubik-Bold text-xl font-bold">Business Listings</h1>
                    <p className="text-xs font-Rubik_Regular">All the businesses registered in Zoe's Memory</p>
                </div>

                <div className="flex justify-end mt-2">

                    <div className="w-64 ml-3 flex">
                        <p className="mt-3 mr-3 text-Rubik_Regular text-xs">Filter</p>
                        <Select placeholder="Action">
                            <option>Approve All</option>
                            <option>Declined All</option>
                        </Select>
                    </div>

                    <div className="h-10 mx-3">
                        <button className="bg-green-700 h-full text-white text-xs p-2 rounded">Add Listing</button>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full">
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>
        </div>
    )
}
