import React, { createContext,useEffect, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()
const Authprovider = ({children}) => {
 

const [UserData, setUserData] = useState(null)
    
   useEffect(() => {
    setLocalStorage( )
     const {employees}=getLocalStorage()
     console.log(employees[0].firstName)
     setUserData(employees)

   }, [])
   


  return (
    <div> 
        <AuthContext.Provider value={[UserData,setUserData]}>
      {children}
   </AuthContext.Provider>
    </div>
  )
}

export default Authprovider 