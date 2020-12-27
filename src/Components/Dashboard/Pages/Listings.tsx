import { Input, Modal, ModalContent, ModalOverlay, Select } from '@chakra-ui/react'
import React from 'react'
import { FiX } from 'react-icons/fi';
import ListingCard from '../Components/ListingCard'

const AddListingModal = (props: {showModal: boolean, closeModal: Function}) => {
    const { showModal, closeModal } = props;
    return (
        <Modal isOpen={showModal} closeOnEsc={false} closeOnOverlayClick={false} isCentered={true} size="xl" motionPreset="scale" onClose={() => closeModal()}>
            <ModalOverlay />
            <ModalContent className="p-6 rounded-md">
                <div className="w-full flex justify-end"><FiX size={24} color="black" onClick={() => closeModal()} /></div>
                <h1 className="font-Rubik-Bold font-bold text-lg mt-4">Create User</h1>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Business name</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">State</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Zipcode</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Phone number</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Email Address</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Website</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Service Type</p>
                        <Select variant="filled" placeholder="Service Type" className="mt-3">
                            <option value="Super Admin">Financial Services</option>
                            <option value="Admin">Childcare Services</option>
                        </Select>
                    </div>

                    <div className="flex justify-end flex-1">
                        <button className="px-4 rounded bg-green-500 text-white w-24 text-xs h-10 mt-8">Submit</button>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default function Listings() {
    const [showModal, setShowModal] = React.useState(false);

    // function
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="w-full h-auto flex flex-col bg-white px-5 pt-6 rounded pb-8">
            <AddListingModal showModal={showModal} closeModal={closeModal} />
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
                        <button onClick={() => setShowModal(true)} className="bg-green-700 h-full text-white text-xs p-2 rounded">Add Listing</button>
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
