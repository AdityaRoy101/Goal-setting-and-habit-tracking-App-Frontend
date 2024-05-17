import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const GlobalContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [userAuth, setUserAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() =>{
    if(!userAuth){
      axios.get('/profile')
        .then(({data}) => {
          setUserAuth(data)
          setUserId(data._id)
          setUserEmail(data.email)
          setUserName(data.name)
          console.log(data);
          console.log(userId);
          console.log(userEmail);
          console.log(userName);
        })
    }
  },[])

  return (
    <main>
      <GlobalContext.Provider value={{ userAuth, setUserAuth, userId, userEmail, userName }}>
        { children }
      </GlobalContext.Provider>
    </main>
  )
}
