import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const GlobalContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [userAuth, setUserAuth] = useState(null);
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() =>{
    if(!userAuth){
      axios.get('/profile')
        .then(({data}) => {
          setUserAuth(data)
          setUserId(data._id)
          setUserEmail(data.email)
          setUserName(data.name)
          setUserName(data.goals_array)
        })
    }
  },[reload])

  return (
    <main>
      <GlobalContext.Provider value={{ userAuth, setUserAuth, userId, userEmail, userName, setReload, reload }}>
        { children }
      </GlobalContext.Provider>
    </main>
  )
}
