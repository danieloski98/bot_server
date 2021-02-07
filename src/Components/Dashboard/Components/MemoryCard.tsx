import React from 'react'
import { FiMapPin, FiTrash2, FiEdit, FiTool } from 'react-icons/fi'


function del(id: string): void {}
interface IProps {
    id?: string;
    item?: string;
    type: 'Service' | 'Location';
    onDelete?:typeof del;
}

export default function Card(props: IProps) {
    return (
        <div className="w-full mb-3 p-2 rounded bg-gray-100 h-12 flex justify-between items-center cursor-not-allowed">
            <div className="flex">
                {props.type === 'Service' ? <FiTool size={20} color="black" />:<FiMapPin size={20} color="black" />}
                <p className="text-sm font-Rubik_Regular ml-4 mt-1">{props.item ||  'New york'}</p>
            </div>

            <div className="flex">
                {/* <FiEdit size={20} color="grey" className="mr-5" /> */}
                {/* <FiTrash2 size={20} color="grey" /> */}
            </div>
        </div>
    )
}
