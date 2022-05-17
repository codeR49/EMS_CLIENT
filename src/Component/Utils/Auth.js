import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user ,setUser] = useState(localStorage.getItem('token'))

    const login = () =>{
        console.log()
        console.log('login triggered')
        setUser(localStorage.getItem('token'))
    }
    const logout =()=>{
        console.log('triggered')
        setUser(null)
        localStorage.clear();
    }
    return(
        <AuthContext.Provider value={{user, login , logout}} >
            {children}
        </AuthContext.Provider>
    )
}
 
export const useAuth = ()=>{
    return useContext(AuthContext)
}