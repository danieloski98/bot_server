import React from 'react'
import { FiCamera } from 'react-icons/fi'
import { Input } from '@chakra-ui/react'

export default function ProfileSettings() {
    return (
        <div className="w-full h-full flex flex-col">
            <div>
                <div className="w-20 h-20 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-300 cursor-pointer transition duration-500 ease-in-out hover:scale-125">
                    <FiCamera color="grey" size={20} />
                </div>
            </div>

            <div className="w-full flex mt-10">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">First Name</p>
                    <Input variant="filled" />
                </div>

                <div className="w-10"></div>

                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Last Name</p>
                    <Input variant="filled" />
                </div>
            </div>

            <div className="w-2/4 flex mt-10 pr-6">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Email</p>
                    <Input variant="filled" />
                    <p className="text-xs text-red-500">You cannot change this email Address</p>
                </div>
            </div>

            <div className="w-full flex justify-end mt-10">
                <button className="w-32 h-12 rounded bg-green-500 text-white text-xs font-Rubik-Regular">Update Profile</button>
            </div>
        </div>
    )
}
