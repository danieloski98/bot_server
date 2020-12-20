import React from 'react'

// components
import ProfileSettings from '../Components/ProfileSettings'
import AccessSettings from '../Components/AcessSettings'
import SecuritySettings from '../Components/SecuritySettings'


const ACTIVECLASSNAME = "w-full h-10 rounded bg-green-100 text-green-600 font-Rubik_Regular text-xs flex justify-start pl-3 items-center mb-4"

const INACTIVECLASSNAME = "w-full h-10 rounded bg-white text-black font-Rubik_Regular text-xs flex justify-start pl-3 items-center mb-4"


const PageSwitcher = (props: any) => {
    switch (props.page) {
        case 1: {
            return <ProfileSettings />
        }
        case 2: {
            return <AccessSettings />
        }
        case 3: {
            return <SecuritySettings />
        }
    }
}

export default function Settings() {
    const [section, setSection] = React.useState(1);
    
    return (
        <div className="w-full h-full rounded bg-white flex p-8">

            <div className="flex flex-col w-64 h-full px-5">
                <h1 className="font-Rubik_Bold text-xl text-black">Settings</h1>
                <p className="font-Rubik_Regular text-sm">Manage your account settings</p>

                <div className="mt-10 flex flex-col">

                    <button onClick={() => setSection(1)} className={section === 1 ? ACTIVECLASSNAME : INACTIVECLASSNAME}>Profile Information</button>

                    <button onClick={() => setSection(2)} className={section === 2 ? ACTIVECLASSNAME : INACTIVECLASSNAME}>Access & Authorization</button>

                    <button onClick={() => setSection(3)} className={section === 3 ? ACTIVECLASSNAME : INACTIVECLASSNAME}>Security</button>
                </div>
            </div>

            <div className="flex-1 rounded border-2 border-gray-100 p-8 overflow-y-auto">
                <PageSwitcher page={section} />
            </div>
        </div>
    )
}
