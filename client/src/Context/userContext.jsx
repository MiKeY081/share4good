import axios from "axios";
import { createContext, useEffect, useState } from "react";


const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    useEffect(()=>{
        const getUser = async () => {
            const {data} = await axios.get("/api/v1/user/profile");

            setUser(data.user);
        }

        getUser();
    },[])
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext