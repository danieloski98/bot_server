import React from 'react'
import { Spinner,InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import EmailIcon from '../../assets/icons/EmailIcon'

const LostForm = (props: {loading: boolean}) => {
    if (props.loading) {
        return (
            <section className="w-full flex justify-center">
                <div className="flex flex-col items-center">
                    <Spinner size="xl" color="green.500" />
                    <p className="font-Rubik_Regular text-green-700 mt-3">Sending Link...</p>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <h1 className="font-Rubik_Bold text-xl">Lost Your Password</h1>
                <p className="font-Rubik_Regular text-sm mt-5">
                    Don't worry you can get back access to your account in a few minutes. Enter the email address associated with your account
                </p>
                <div className="flex flex-col mt-10">
                    <p className="font-Rubik_Medium text-sm">Email</p>
                    <InputGroup>
                        <InputLeftElement></InputLeftElement>
                        <Input variant="filled" type="email" />
                    </InputGroup>

                    <button className="bg-green-700 text-white h-12 rounded mt-5">Send Reset Link</button>
                </div>
            </section>
        )
    }
    
}

const EmailSent = () => {
    return (
        <section className="w-full flex flex-col items-center">
            <h1 className="mb-8 font-Rubik_Bold text-xl">You've Got Mail</h1>
            <EmailIcon />
            <p className="text-center mt-5">A password reset link has been sent to your email address. Please check your inbox or spam.</p>
            <button className="bg-green-700 text-white h-12 w-full text-sm rounded mt-5">Back To Log In Page</button>
        </section>
    )
}

export default function Form() {
    const [loading, setLoading] = React.useState(true);
    const [emailSent, setEmailSent] = React.useState(true);

    return (
        <section>
            {
                emailSent ?
                (<EmailSent />): (<LostForm loading={loading} />)
            }
        </section>
    )
    
}
