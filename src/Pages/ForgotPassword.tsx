import React from 'react'
import '../styles/Home/index.css'
import Messanger from '../assets/icons/Messanger';
import Zoe from '../assets/icons/Zoe';
import Form from '../Components/Forgotpassword/Form';

export default function ForgotPassword() {
    return (
        <section className="w-screen h-screen background">
            <section className="w-full h-full mask flex flex-col">
                {/* header */}
                <section className="w-full h-20 px-10 py-5 flex items-center">
                    <Zoe />
                </section>

                {/* body */}
                <section className="flex-1 flex">
                    <section className="h-full w-1/3  px-10 flex flex-col justify-center">

                        <div className="w-full h-2/3 bg-white rounded-md shadow-sm p-10 flex flex-col justify-center">
                            <Form />
                        </div>

                        <p className="font-Rubik_Regular w-full mt-10 text-white text-xs text-left">
                        Zoe is a digital conversational assistant supporting Single Moms Network. For more information contact hello@singlemomsnetwork.info
                        </p>
                        

                    </section>


                    <section className="flex-1 px-20 flex justify-center flex-col">
                        <h1 className="font-Rubik_Bold text-white text-3xl">
                            Conversational Digital Assistant For Single <br/> Moms Network
                        </h1>
                        <div className="flex mb-20 mt-3">
                            <p className="text-white font-Rubik_Regular text-sm mt-1">Available On Facebook Messenger</p>
                            <div className="ml-5">
                                <Messanger />
                            </div>
                        </div>
                    </section>

                </section>
            </section>
        </section>
    )
}
