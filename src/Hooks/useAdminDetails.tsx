import React from 'react'
import { IAdmin, AdminContext } from '../Contexts/AdminDetailsContext'

export default function useAdminDetails(): IAdmin {
    const adminContext: IAdmin = React.useContext(AdminContext);
    const { id, email, token, role, firstname, lastname, search, setEmail, setId, setToken, setFirstname, setLastname, setRole, setSearch} = adminContext;
 
   
    return {
        id,
        email,
        token,
        role,
        firstname,
        lastname,
        search,
        setId,
        setEmail,
        setToken,
        setFirstname,
        setLastname,
        setRole,
        setSearch
    }
}
