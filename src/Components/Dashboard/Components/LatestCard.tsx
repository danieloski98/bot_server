import React from 'react'



export default function LatestCard(props: { item: any}) {
 

    return (
        <div className="w-72 h-64 rounded-lg bg-gray-100 p-5 flex flex-col">
                    
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-700 text-xs rounded">{props.item.Listing_service_type}</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">{props.item.Listing_business_name}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.Listings_address}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.Listing_state}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.Listing_phone}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.Listing_address}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.Listing_email}</p>

                    {props.item.website !== null && (<p className="mt-2 font-Rubik-Regular text-sm">{props.item.Listing_website}</p>)}
        </div>
    )
}
