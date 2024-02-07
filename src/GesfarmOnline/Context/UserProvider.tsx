import { UserContext } from "./UserContext"

interface UserProviderProps { 
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({children }:UserProviderProps) => { 

    return (
        <UserContext.Provider value={{}}>
            { children }
        </UserContext.Provider>
    )

}