import React, { useEffect, useState } from 'react'
import { useFetchData } from './hooks/useFetchData'

export const UserList = ({ endPoint }) => {

    const {users, isLoading } = useFetchData(endPoint)

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
