import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"

export default function AcessSettings() {
    return (
        <div className="w-full h-full p-5 flex flex-col">

            <div className="flex justify-between">

                <div className="flex flex-col">
                    <h1 className="text-xl font-Rubik_Bold text-black">Access & Authorization</h1>
                    <p className="text-xs font-Rubik_Regular">Manage users that can access this admin</p>
                </div>

                <div>
                    <button className="w-32 h-10 rounded bg-green-500 text-white text-xs">Add User</button>
                </div>

            </div>

            <div className="firsttabe w-full mt-5">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                        <Th>User</Th>
                        <Th>Email Address</Th>
                        <Th isNumeric>Role</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>

            <div className="firsttabe w-full mt-10">
            <p className="text-xs font-Rubik_Regular mb-6">Other Admins</p>

                <Table variant="simple">
                    <Thead>
                        <Tr>
                        <Th>User</Th>
                        <Th>Email Address</Th>
                        <Th isNumeric>Role</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                    </Tbody>
                    <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                </Table>
            </div>

        </div>
    )
}
