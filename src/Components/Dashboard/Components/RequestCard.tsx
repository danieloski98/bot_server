import React from 'react'
import { AlertDialog, AlertDialogOverlay, AlertDialogBody, AlertDialogContent, AlertDialogFooter } from '@chakra-ui/react'
import { FiX } from 'react-icons/fi';

const AcceptDialog = (props: { isOpen: boolean, title: string, close: Function }) => {
    const [loading, setLoading] = React.useState(false);
    const { isOpen, title, close } = props;
    const cancelRef = React.useRef();

    return (
        <AlertDialog isCentered={false} closeOnOverlayClick={false} closeOnEsc={false}  size="md" motionPreset="scale" isOpen={isOpen} onClose={() => close()} leastDestructiveRef={cancelRef}>
            <AlertDialogOverlay>
                <AlertDialogContent className="rounded-lg bg-white p-4">
                    <div className="w-fill flex justify-end"><FiX size={25} color="black" className="cursor-pointer" onClick={() => close()}/></div>
                    <h1 className="mt-3 font-Rubik-Bold font-bold text-center text-lg">Accept Listing</h1>
                    <p className="text-center mt-4">{`You're about approving a listing - ${title}. Do you wish to continue`}</p>

                    <div className="flex justify-center mt-5">
                        <button className="px-2 h-8 rounded text-white text-xs font-Rubik_Regular bg-green-500 w-24 mr-4">Accept</button>
                        <button className="px-2 h-8 rounded text-black text-xs font-Rubik_Regular border-2 border-green-500 w-24">Decline</button>
                    </div>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

const DeclineModal = (props: { isOpen: boolean, title: string, close: Function }) => {

    const [loading, setLoading] = React.useState(false);
    const { isOpen, title, close } = props;
    const cancelRef = React.useRef();

    return (
        <AlertDialog closeOnOverlayClick={false} closeOnEsc={false} isCentered={false} size="md" motionPreset="scale" isOpen={isOpen} onClose={() => close()} leastDestructiveRef={cancelRef}>
            <AlertDialogOverlay>
                <AlertDialogContent className="rounded-lg bg-white p-4">
                    <div className="w-fill flex justify-end"><FiX size={25} color="black" className="cursor-pointer" onClick={() => close()}/></div>
                    <h1 className="mt-3 font-Rubik-Bold font-bold text-center text-lg">Decline Listing</h1>
                    <p className="text-center mt-4">{`You're about Declining a listing - ${title}. Do you wish to continue`}</p>

                    <div className="flex justify-center mt-5">
                        <button className="px-2 h-8 rounded text-white text-xs font-Rubik_Regular bg-green-500 w-24 mr-4">Continue</button>
                        <button className="px-2 h-8 rounded text-black text-xs font-Rubik_Regular border-2 border-green-500 w-24">Cancel</button>
                    </div>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
    
}

export default function RequestCard() {
    const [showAcceptDialog, setShowAcceptDialog] = React.useState(false);
    const [showDeclineModal, setShowDeclineModal] = React.useState(false);

    // functions
    const closeAcceptModal = () => {
        setShowAcceptDialog(false);
    }

    const closeDeclineModal = () => {
        setShowDeclineModal(false);
    }
    return (
        <div className="w-72 h-auto  rounded-lg bg-gray-100 p-5 flex flex-col">


                    <AcceptDialog isOpen={showAcceptDialog} title="Hello there" close={closeAcceptModal} />
                    <DeclineModal isOpen={showDeclineModal} title="Hello There" close={closeDeclineModal} />


                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-800 text-xs rounded">Financial Service</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">John Knox's Finance Group</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">112 Riverview Lane, Bronx, 11435.</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">New York</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">+1 (902) 562 3772</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">childcaresupport@gmail.com</p>

                    <div className="flex w-full justify-between mt-5">
                        <button className="bg-green-500 text-xs flex-1 p-1 mx-2 text-white rounded" onClick={() => setShowAcceptDialog(true)}>Approve</button>
                        <button className="bg-white text-xs flex-1 p-1 mx-2 text-green-500 border-2 border-green-500 rounded" onClick={() => setShowDeclineModal(true)}>Decline</button>
                    </div>
        </div>
    )
}
