import { } from '@chakra-ui/react'
import React from 'react'
import ListingCard from '../Components/ListingCard'
import { Spinner } from '@chakra-ui/react'
import { IListing } from '../../../types/listings';
import { useQuery } from 'react-query';
import {  getApproved } from '../Functions/GetListings';
import Empty  from '../../../assets/icons/notfound.svg';



export default function Listings() {
    const [requests, setRequests] = React.useState([] as IListing[]);
    const [offset, setOffset] = React.useState(0);
    const [remaining, setRemaining] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);

    const {isLoading, data} = useQuery(['Approvedlistings', offset],() => getApproved(offset));
    console.log(data);


    React.useEffect(() => {
        // setTotalRequest(requests.length)
        if (data !== undefined) {
            setRequests(prev => [...prev, ...data.data.listings])
            if (data.data.remaining > 0) {
                setRemaining(data.data.remaining);
            }else {
                setRemaining(0);
            }
        }
    }, [data, isLoading]);


    const more = () => {
        // totalRequest.current = requests.length;
        if (remaining > 0) {
            setOffset(prev => prev + 6);
        }
    }

     // function
     const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="w-full h-auto flex flex-col bg-white px-5 pt-6 rounded pb-8">
            
            <div className="w-full h-24 flex mt-5 mb-5">

                <div className="flex-1 flex flex-col">
                    <h1 className="font-Rubik-Bold text-xl font-bold">Business Listings</h1>
                    <p className="text-xs font-Rubik_Regular">All the businesses registered and approved in Zoe's Memory</p>
                </div>

                
            </div>

            <div className=" pb-10 flex-1">
                    {isLoading ?
                        (<div className="w-full h-full flex justify-center items-centered">
                            <Spinner color="green.500" size="lg" />
                        </div>)
                        :
                        (<div>
                            {requests.length < 1 ?
                                (<div className="w-full flex flex-col items-center pt-10">
                                    <img src={Empty} alt="empty" width="250" />
                                    <h1 className="mt-5 font-Rubik-medium text-lg text-center">No request found!</h1>
                                </div>):
                                (<div className="w-full grid grid-cols-3 gap-3">
                                    {requests.map((item, index) => (
                                        <ListingCard item={item} key={index} />
                                    ))}
                                </div>)
                            }
                        </div>)
                    }
            </div>

            <div className="w-full h-24 flex justify-center">
                {remaining > 0 && (<button onClick={more} className="h-10 rounded bg-green-400 px-3 text-xs text-white font-Rubik_Regular">Load more</button>)}
            </div>

        </div>
    )
}
