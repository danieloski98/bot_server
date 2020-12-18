import React from 'react'
import { InputGroup, InputLeftElement, InputRightElement, Input} from '@chakra-ui/react'
import Lock from '../../assets/icons/Lock'
import Envelope from '../../assets/icons/Envelope'
import Eye from '../../assets/icons/Eye'

export default function Form() {
    return (
        <div>
            <h1 className="font-Rubik_Bold text-xl">Welcome Back</h1>
            <p className="font-Rubik_Medium text-xs">Please sign in to access your account</p>

            <div className="flex flex-col mt-3">
                <p className="font-Rubik_Medium text-sm">Email</p>
                <InputGroup>
                    <InputLeftElement
                        children={<Envelope />}
                    ></InputLeftElement>
                    <Input type="email" variant="filled" />
                </InputGroup>
            </div>

            <div className="flex flex-col mt-3">
                <p className="font-Rubik_Medium text-sm">Password</p>
                <InputGroup>
                    <InputLeftElement
                        children={<Lock />}
                    ></InputLeftElement>
                    <Input type="password" variant="filled" />
                    <InputRightElement
                        children={<Eye />}
                    ></InputRightElement>
                </InputGroup>
            </div>

            <p className="text-right font-Rubik_Medium text-sm text-green-700 mt-4">Forgot Password</p>

            <button className="w-full h-12 mt-4 font-Rubik_Regular text-sm rounded text-white bg-green-700">Login</button>
        </div>
    )
}
