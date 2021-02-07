import React from 'react'
import { FiX } from 'react-icons/fi'
import { Spinner } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import useSearch from '../../../Hooks/useSearch'

const ShowSpinner = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center">
                <Spinner size="lg" color="green.500" />
                <p className="font-Rubik-Medium">Searching...</p>
            </div>
        </div>
    )
}

export default function SearchResult() {
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const history = useHistory();
    const { value } = useSearch();

    React.useEffect(() => {
        const timeout = setTimeout(() => { setLoading(false) }, 4000);

        return function() {
            clearTimeout(timeout);
        }
    });


    return (
        <div className=" w-full h-full bg-white rounded shadow-md flex p-8 flex-col">

            <div className="flex w-full h-10 justify-between">
                <p className="font-Rubik_Bold text-lg text-gray-600">Search result</p>
                <div title="Close" className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-200 ">
                    <FiX size={15} color="red" onClick={() => history.push('/dashboard')} />
                </div>
            </div>

            <div className="flex-1 ">
               {loading ?  <ShowSpinner /> : <p>{value}</p>}
            </div>

        </div>
    )
}
