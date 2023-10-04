import React, { useEffect, useState } from 'react'

export const UserList = ({ endPoint }) => {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        fetchData()
    },[endPoint])

    return (
        <>
            <ul>
                {
                    endPoint == 'users'
                        ? users.map(user => <li key={user.id}>{user.name}</li>) 
                        : users.map(user => <li key={user.id}>{user.body}</li>) 
                }
            </ul>
        </>
    )
}
