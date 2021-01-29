import { } from '@chakra-ui/react'
import React from 'react'
import ListingCard from '../Components/ListingCard'


export default function Listings() {
    

   

    return (
        <div className="w-full h-auto flex flex-col bg-white px-5 pt-6 rounded pb-8">
            
            <div className="w-full h-24 flex mt-5 mb-5">

                <div className="flex-1 flex flex-col">
                    <h1 className="font-Rubik-Bold text-xl font-bold">Business Listings</h1>
                    <p className="text-xs font-Rubik_Regular">All the businesses registered and approved in Zoe's Memory</p>
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
