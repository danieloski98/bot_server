import React from 'react'
import useAdminDetails from '../../../Hooks/useAdminDetails';
import { IListing } from '../../../types/listings';
import AcceptDialog from './Modals/ApproveListing';
import DeclineModal from './Modals/DeclineModal';


export default function RequestCard(props: {item: IListing}) {
    const [showAcceptDialog, setShowAcceptDialog] = React.useState(false);
    const [showDeclineModal, setShowDeclineModal] = React.useState(false);
    const details = useAdminDetails();

    // functions
    const closeAcceptModal = () => {
        setShowAcceptDialog(false);
    }

    const closeDeclineModal = () => {
        setShowDeclineModal(false);
        
    }
    return (
        <div className="w-72 h-auto  rounded-lg bg-gray-100 p-5 flex flex-col">


                    <AcceptDialog isOpen={showAcceptDialog} title={props.item.business_name} id={props.item.id} close={closeAcceptModal} />
                    <DeclineModal isOpen={showDeclineModal} title={props.item.business_name} id={props.item.id} close={closeDeclineModal} />


                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-800 text-xs rounded">{props.item.service_type}</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">{props.item.business_name}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.address}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.state}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.phone}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.email}</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">{props.item.zip_code}</p>

                    {
                        details.role === 1 && (
                            <div className="flex w-full justify-between mt-5">
                                <button className="bg-green-500 text-xs flex-1 p-1 mx-2 text-white rounded" onClick={() => setShowAcceptDialog(true)}>Approve</button>
                                <button className="bg-white text-xs flex-1 p-1 mx-2 text-green-500 border-2 border-green-500 rounded" onClick={() => setShowDeclineModal(true)}>Decline</button>
                            </div>
                        )
                    }
        </div>
    )
}
