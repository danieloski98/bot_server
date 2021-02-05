import React from 'react'
import { Spinner } from '@chakra-ui/react'
import RequestCard from '../../Dashboard/Components/RequestCard'
import { IListing } from '../../../types/listings';
import { useQuery } from 'react-query';
import { makeRequest } from '../Functions/GetListings';
import Empty  from '../../../assets/icons/notfound.svg';
import AddListingModal from '../Components/Modals/AddListingModal';
import { FiRefreshCw } from 'react-icons/fi'


export const IconsHolder = (props) => <div className="flex items-center h-full ">{props.children}</div>;

export default function Request() {
    const [requests, setRequests] = React.useState([] as IListing[]);
    const [offset, setOffset] = React.useState(0);
    const [remaining, setRemaining] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);

    const {isLoading, data, refetch} = useQuery(['listings', offset],() => makeRequest(offset));
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

    async function re() {
        setRequests([]);
        const {data} = await refetch();
           if (data !== undefined) {
            setRequests(prev => [...data.data.listings])
            if (data.data.remaining> 0) {
                setRemaining(data.data.remaining);
            }else {
                setRemaining(0);
            }
        }
       }

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
        <div className="w-full h-auto bg-white rounded px-5 pt-6 flex flex-col">
            <AddListingModal showModal={showModal} closeModal={closeModal} />
            <div className="w-full h-24 flex mt-5 mb-5">

                <div className="flex-1 flex flex-col">
                    <h1 className="font-Rubik-Bold text-xl font-bold">Requests</h1>
                    <p className="text-xs font-Rubik_Regular">Businesses requesting to be listed on Zoe's Database. Please verify the data before approving</p>
                </div>

                <div className="flex justify-end mt-2">
                    <div className="w-24 flex justify-center items-center h-10">
                        <FiRefreshCw onClick={re} title="Refresh list" size={25} color="grey" className="cursor-pointer" />
                    </div>
                    <div className="h-10 mr-10">
                        <button onClick={() => setShowModal(true)} className="bg-green-500 h-full text-white text-xs p-2 rounded">Add Request</button>
                    </div>
{/* 
                    <div className="w-32 ml-3">
                        <Select placeholder="Action">
                            <option>Approve All</option>
                            <option>Declined All</option>
                        </Select>
                    </div> */}

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
                                        <RequestCard item={item} key={index} />
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
