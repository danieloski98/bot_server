import React from 'react'
import { Modal, ModalOverlay, ModalContent, Spinner} from '@chakra-ui/react'

interface IProps {
    loading: boolean;
    message?: string;
    onClose: Function;
}

export default function Loader(props: IProps) {
    return (
        <Modal isOpen={props.loading} isCentered={true} onClose={() => props.onClose()}>
            <ModalOverlay />
            <ModalContent>
                <div className="w-full h-auto p-12 rounded-md flex flex-col justify-center items-center">
                    <Spinner size="lg" color="green.500" />
                    <h1 className="font-Rubik_Bold mt-5">{
                        props.message === null || props.message === undefined ? 'Loading...' : props.message
                    }</h1>
                </div>
            </ModalContent>
        </Modal>
    )
}
