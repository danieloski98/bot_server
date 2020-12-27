import React from 'react'
import {
    Table, Thead, Tbody, 
    Tr, Th, Td, Modal, 
    Input,
    ModalOverlay,
    ModalContent,
    Select,
} from "@chakra-ui/react"
import { FiX } from 'react-icons/fi'



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
                        <p className="text-sm font-bold font-Rubik-Regular">First name</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Last name</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Email</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>

                    <div className="flex flex-col flex-1">
                        <p className="text-sm font-bold font-Rubik-Regular">Password</p>
                        <Input type="text" variant="filled" className="mt-3" />
                    </div>
                </div>

                <div className="mt-4 flex justify-between w-full">
                    <div className="flex flex-col flex-1 mr-3">
                        <p className="text-sm font-bold font-Rubik-Regular">Role</p>
                        <Select variant="filled" className="mt-3">
                            <option value="Super Admin">Super Admin</option>
                            <option value="Admin">Admin</option>
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


export default function AcessSettings() {
    const [showModal, setShowModal] = React.useState(false);

    // function
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="w-full h-full p-5 flex flex-col">
            <AddListingModal showModal={showModal} closeModal={closeModal} />
            <div className="flex justify-between">

                <div className="flex flex-col">
                    <h1 className="text-xl font-Rubik_Bold text-black">Access & Authorization</h1>
                    <p className="text-xs font-Rubik_Regular">Manage users that can access this admin</p>
                </div>

                <div>
                    <button className="w-32 h-10 rounded bg-green-500 text-white text-xs" onClick={() => setShowModal(true)}>Add User</button>
                </div>

            </div>

            <div className="firsttabe w-full mt-5">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>User</Th>
                            <Th>Email Address</Th>
                            <Th isNumeric>Role</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Enoch brown</Td>
                            <Td>Brown@gmail.com</Td>
                            <Td textAlign="right">Super Admin</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>

            <div className="firsttabe w-full mt-10">
                <p className="text-xs font-Rubik_Regular mb-6">Other Admins</p>

                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>User</Th>
                            <Th>Email Address</Th>
                            <Th isNumeric>Role</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Enoch brown</Td>
                            <Td>Brown@gmail.com</Td>
                            <Td textAlign="right">Admin</Td>
                        </Tr>
                        <Tr>
                            <Td>Enoch brown</Td>
                            <Td>Brown@gmail.com</Td>
                            <Td textAlign="right">Admin</Td>
                        </Tr>

                    </Tbody>
                    <Tr>
                            <Td>Enoch brown</Td>
                            <Td>Brown@gmail.com</Td>
                            <Td textAlign="right">Admin</Td>
                    </Tr>
                    <Tr>
                            <Td>Enoch brown</Td>
                            <Td>Brown@gmail.com</Td>
                            <Td textAlign="right">Admin</Td>
                    </Tr>
                </Table>
            </div>

        </div>
    )
}
