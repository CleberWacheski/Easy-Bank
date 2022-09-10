import { useSession } from 'next-auth/react';
import { createContext, ReactNode, useEffect, useState } from 'react'

interface UserProviderProps {
    children: ReactNode
}

interface UserProps {
    name ?: string;
    email?: string;
    photo?: string;
}

export const UserContext = createContext({} as UserProps)


export function UserContextProvider({ children }) {

    const [user, setUser] = useState({})
    const {data : session } = useSession()

    useEffect(()=> {

        if (session) {

            setUser({
                name: session.user.name,
                email : session.user.email,
                photo : session.user.image
            })
        }

    },[session])
    

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )

}