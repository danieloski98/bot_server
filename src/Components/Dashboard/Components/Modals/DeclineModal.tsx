import React from 'react'
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, Spinner } from '@chakra-ui/react'
import { FiX } from 'react-icons/fi';
import * as axios from 'axios';
import { useMutation } from 'react-query';
import { IReturnType } from '../../../../types/ReturnType';
import { URL } from '../../../../types/Url'
import useRefch from '../../../../Hooks/useRefetch'

const DeclineListingModal = (props: { isOpen: boolean, title: string, close: Function, id: string }) => {
    const [loading, setLoading] = React.useState(false);
    const { isOpen, title, close } = props;
    const cancelRef = React.useRef();
    const {handleRefetch} = useRefch();

    const Mutation = useMutation(async(id: string) => {
        const request = await axios.default.delete(`${URL}/listings/${id}`);
        return  request.data as IReturnType;
    })

    React.useEffect(() => {
        if (Mutation.status === 'loading') {
            return;
        }
        if (Mutation.status === 'error') {
            setLoading(false);
            alert(Mutation.error['response'].data.errorMessage);
            Mutation.reset();
            props.close();
        } else if (Mutation.status === 'success') {
            setLoading(false);
            alert(Mutation.data.successMessage);
            Mutation.reset();
            handleRefetch();
            props.close();
        }
    }, [setLoading, Mutation, props, handleRefetch]);

    const submit = async() => {
        setLoading(true);
        Mutation.mutate(props.id);
    }
    

    return (
        <AlertDialog closeOnOverlayClick={false} closeOnEsc={false} isCentered={false} size="md" motionPreset="scale" isOpen={isOpen} onClose={() => close()} leastDestructiveRef={cancelRef}>
            <AlertDialogOverlay>
                <AlertDialogContent className="rounded-lg bg-white p-4">
                    <div className="w-fill flex justify-end"><FiX size={25} color="black" className="cursor-pointer" onClick={() => close()}/></div>
                    <h1 className="mt-3 font-Rubik-Bold font-bold text-center text-lg">Decline Listing</h1>
                    <p className="text-center mt-4">{`You're about Declining a listing by the company - ${title}. Do you wish to continue`}</p>

                    <div className="flex justify-center mt-5">
                        <button disabled={loading} onClick={submit} className="px-2 h-8 rounded text-white text-xs font-Rubik_Regular bg-green-500 w-24 mr-4">{
                            loading ? <Spinner color="white" size="md" /> : 'Continue'
                        }</button>
                        <button  disabled={loading} onClick={() => props.close()} className="px-2 h-8 rounded text-black text-xs font-Rubik_Regular border-2 border-green-500 w-24">Cancel</button>
                    </div>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
    
}

export default DeclineListingModal;