import { Input } from '@chakra-ui/react'
import React from 'react'

export default function SecuritySettings() {
    return (
        <div className="w-full h-full flex flex-col">
             <div className="w-full flex mt-10">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Old Password</p>
                    <Input variant="filled" />
                </div>

                <div className="w-10"></div>

                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">New Password</p>
                    <Input variant="filled" />
                </div>
            </div>

            <div className="w-2/4 flex mt-10 pr-6">
                <div className="flex-1 flex flex-col">
                    <p className="text-xs font-Rubik_Regular">Confrim Password</p>
                    <Input variant="filled" />
                </div>
            </div>

            <div className="w-full flex justify-end mt-10">
                <button className="w-32 h-12 rounded bg-green-500 text-white text-xs font-Rubik-Regular">Update</button>
            </div>
        </div>
    )
}
