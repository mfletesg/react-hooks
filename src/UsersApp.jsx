import React, { useEffect, useState } from 'react'
import { UserList } from './components/UserList';

export const UsersApp = () => {

    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = async () => {
        // await fetchUsers()
        setEndPoint('comments')
        console.log('Entro')
    }



    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    return (
        <>
            <h1>Lista de usuarios</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Cargar usuarios</button>
        </>
    )
}
