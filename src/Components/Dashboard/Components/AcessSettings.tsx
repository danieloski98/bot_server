import React from 'react'
import { useQuery, } from 'react-query';

// component
import AddAdminModal from './AddAdminModal';
import AdminsTables from './AdminsTables';
import { IReturnType } from '../../../types/ReturnType';


export default function AcessSettings() {
    const [showModal, setShowModal] = React.useState(false);

    // function
    const closeModal = () => {
        setShowModal(false);
    }
    const query = useQuery('admins', async () => {
        const request = await fetch('http://localhost:4000/admin');
        const result = await request.json() as IReturnType;
        console.log(result)
        if (!request.ok) {
            throw new Error("An Error occured while trying to fetch the admin.");
        }
        return result;
    })

    return (
        <div className="w-full h-full p-5 flex flex-col">
            <AddAdminModal showModal={showModal} closeModal={closeModal} />
            <div className="flex justify-between">

                <div className="flex flex-col">
                    <h1 className="text-xl font-Rubik_Bold text-black">Access & Authorization</h1>
                    <p className="text-xs font-Rubik_Regular">Manage users that can access this admin</p>
                </div>

                <div>
                    <button className="w-32 h-10 rounded bg-green-500 text-white text-xs" onClick={() => setShowModal(true)}>Add User</button>
                </div>

            </div>

            <div className="flex-1 flex">
                <AdminsTables loading={query.isLoading} superAdmins={query.isSuccess ? query.data.data.filter((item) => item.role === 1) : []} admins={query.isSuccess ? query.data.data.filter((item) => item.role === 2) : []} />
            </div>


        </div>
    )
}
