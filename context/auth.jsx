import { useContext, createContext, useState, useEffect } from 'react'

const AuthContext = createContext({
    user: null,
    error: null,
    setUser: null,
    setError: null
})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        setTimeout(() =>
            setError("")
            , 2000)
    }, [error])

    return (
        <AuthContext.Provider value={{ user, setUser, error, setError }}>
            {children}
        </AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext)
}