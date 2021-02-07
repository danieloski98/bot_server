import React from 'react'

function change(item: string): void {}
export interface IAdmin {
    id: string;
    token: string;
    email: string;
    firstname: string;
    lastname: string;
    role: number;
    search: string;
    setId: Function;
    setToken: Function;
    setEmail: Function;
    setFirstname: Function;
    setLastname: Function;
    setRole: Function;
    setSearch: typeof change;
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
    const [search, setSearch] = React.useState('');

    return (
        <AdminContext.Provider value={{ id, token, email, firstname, lastname, role, search, setId, setToken, setEmail, setFirstname, setLastname, setRole, setSearch }}>
            { props.children }
        </AdminContext.Provider>
    )
}
