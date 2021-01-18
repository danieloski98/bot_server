import React from 'react'

export interface IAdmin {
    id: string;
    token: string;
    email: string;
    firstname: string;
    lastname: string;
    role: number;
    setId: Function;
    setToken: Function;
    setEmail: Function;
    setFirstname: Function;
    setLastname: Function;
    setRole: Function;
}

let str: IAdmin;

export const AdminContext = React.createContext(str);

export default function AdminDetailsContext(props) {
    const [id, setId] = React.useState(null);
    const [token, setToken] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [role, setRole] = React.useState(0);

    return (
        <AdminContext.Provider value={{ id, token, email, firstname, lastname, role, setId, setToken, setEmail, setFirstname, setLastname, setRole}}>
            { props.children }
        </AdminContext.Provider>
    )
}
