import React from 'react'
import { FiMapPin } from 'react-icons/fi'

export default function Card() {
    return (
        <div className="w-full mb-3 p-2 rounded bg-gray-100 h-12 flex items-center cursor-not-allowed">
            <FiMapPin size={20} color="black" />
            <p className="text-sm font-Rubik_Regular ml-4 mt-1">New York</p>
        </div>
    )
}
