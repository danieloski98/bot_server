import React from 'react'
import Help from '../../../assets/icons/Help';
import { Spinner } from '@chakra-ui/react'

interface IProps {
    header: string;
    count: number;
}

export default function StatCard(props: IProps) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])
    return (
        <div className="w-72 h-24 rounded-lg bg-gray-100 p-5 flex flex-col mb-6">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular text-sm">{props.header}</p>
                        <Help />
                    </div>
                    {loading ? <Spinner color="green.500" size="md" className="mt-3" /> : <p className="text-lg font-Rubik-Bold font-bold mt-3">{props.count}</p>}
        </div>
    )
}
