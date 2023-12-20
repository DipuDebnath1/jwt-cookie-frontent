import { useContext, createContext, useState } from 'react'

const SettingContext = createContext({
    data: null
})

export const SettingProvider = ({ children }) => {

    const [data,setData] = useState({}) 

    return (
        <SettingContext.Provider value={{ data,setData }}>
            {children}
        </SettingContext.Provider>)
}

export const useSetting = () => {
    return useContext(SettingContext)
}