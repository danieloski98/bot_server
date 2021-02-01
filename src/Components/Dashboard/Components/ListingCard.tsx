import React from 'react'
import { IListing } from '../../../types/listings'

export default function ListingCard(props: { item: IListing}) {
    return (
        <div className="w-72 h-56 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-700 text-xs rounded">{props.item.service_type}</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">{props.item.business_name}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.address}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.state}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.phone}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.email}</p>
        </div>
    )
}
