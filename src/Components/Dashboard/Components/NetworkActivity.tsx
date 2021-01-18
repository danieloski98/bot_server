import React from 'react'
import useNetwork from '../../../Hooks/useNetwork'

export default function NetworkActivity() {
    const [connection, setConnection] = React.useState(false);
    const [showBar, setShowBar] = React.useState(false);
    const { connected } = useNetwork();

    React.useEffect(() => {
        if (connected) {
            setConnection(connected);
            setShowBar(true);
            setTimeout(() => {
                setShowBar(false);
            }, 5000);
        }else {
            setConnection(connected);
            setShowBar(true);
        }
    }, [connected])
    return (
        <div className="">
            {
                showBar ? 
                <div className="flex-1">
                    {
                        connection ? 
                        <div className="w-full h-full bg-green-400 text-center font-Rubik_Bold">
                            ONLINE - Connection Restored!
                        </div> :
                        <div className="w-full h-full bg-red-400 text-center font-Rubik_Bold">
                            <p className="font-Rubik-Bold font-bold text-white">OFFLINE - There is no internet connection!</p>
                        </div>
                    }
                </div> : <span></span>
            }
        </div>
    )
}
