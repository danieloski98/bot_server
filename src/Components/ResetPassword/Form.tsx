import React from 'react'
import { Spinner, InputGroup, InputLeftElement, InputRightElement, Input } from '@chakra-ui/react'
import Lock from '../../assets/icons/Lock'
import Eye from '../../assets/icons/Eye'

const Form = (props: {action: Function}) => {
    return (
        <section className="w-full flex flex-col">
            <h1 className="font-Rubik_Bold text-xl">Set New Password</h1>
            <p className="font-Rubik_Medium text-sm">Set a new password you can remember easily</p>

            <div className="flex flex-col mt-5">
                <p className="font-Rubik_Regular">New Password</p>
                <InputGroup>
                    <InputLeftElement children={<Lock />}></InputLeftElement>
                    <Input variant="filled" type="password" />
                    <InputRightElement children={<Eye />}></InputRightElement>
                </InputGroup>
            </div>

            <div className="flex flex-col mt-5">
                <p className="font-Rubik_Regular">Confirm Password</p>
                <InputGroup>
                    <InputLeftElement children={<Lock />}></InputLeftElement>
                    <Input variant="filled" type="password" />
                    <InputRightElement children={<Eye />}></InputRightElement>
                </InputGroup>
            </div>

            <button onClick={() => props.action()} className="w-full bg-green-700 h-12 text-white rounded text-sm mt-8">set password</button>
        </section>
    )
}

const Loader = () => {
    return (
        <section className="w-full flex flex-col items-center">
            <Spinner color="green.500" size="xl" />
            <p className="text-green-700 mt-5 font-Rubik_Regular">Resetting Password...</p>
        </section>
    )
}

export default function ResetForm() {
    const [loading, setLoading] = React.useState(false);

    const reset = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 4000)
    }
    return (
       <section>
           {
               loading ? 
               <Loader /> :
               <Form action={reset} />
           }
       </section>
    )
}
