import React from 'react'
import { useQuery } from 'react-query';
import ListingCard from '../Components/LatestCard'
import StatCard from '../Components/StatCard'
import { getStats } from '../Functions/GetListings'
import { Spinner } from '@chakra-ui/react'
import { IListing } from '../../../types/listings';
import { useHistory } from 'react-router-dom'

export default function Dasboard() {
    const [business, setBusiness] = React.useState(0);
    const [approved, setApproved] = React.useState(0);
    const [request, setRequests] = React.useState(0);
    const [latest, setLatest] = React.useState([]);
    const history = useHistory();

    const {isLoading, data} = useQuery('stats',() => getStats());

    React.useEffect(() => {
        // setTotalRequest(requests.length)
        if (data !== undefined) {
            setBusiness(data.data.business);
            setApproved(data.data.approved);
            setRequests(data.data.request);
            const arr: IListing[] = data.data['latest'];
            console.log(arr);
            setLatest(prev => arr);
        }
    }, [data, isLoading]);
    return (
        <div className="w-full h-auto rounded bg-white py-12 px-5">

            <h1 className="font-Rubik_Medium text-lg">Dashboard</h1>
            <p className="text-sm font-Rubik-Regular">Here's a quick preview of what's happening</p>

            <div className="activities w-full flex justify-between flex-wrap mt-4">

                <StatCard header="Registered Businesses" count={business} />
                
                <StatCard header="Pending Requests" count={request} />
                
                <StatCard header="Approved Request" count={approved} />
                

            </div>

            <div className="header flex justify-between mt-5 pr-0">
                <h1 className="text-sm font-Rubik_Regular ml-1 mt-2">Recently Added</h1>
                <button onClick={() => history.push('/dashboard/listings')} className="bg-green-500 rounded p-2 text-xs text-white">View more</button>
            </div>


           {
               isLoading ? (
                   <div className="w-full pt-10 flex justify-center">
                       <Spinner color="green.500" size="lg" />
                   </div>
               ) : (
                

               <div className="w-full">
                        {
                            latest === undefined  ? <p></p> : <div className="recent flex flex-wrap justify-between mt-6">
                                {
                                     latest.map((item) => (
                                        <div className="mr-6 mb-10">
                                            <ListingCard item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        }
               </div>
 
               )
           }

        </div>
    )
}
