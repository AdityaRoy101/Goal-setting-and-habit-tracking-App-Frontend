import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/AuthProvider"

const GoalViewer = () => {

  const { userId, setReload, reload } = useContext(GlobalContext);

  useEffect(() => {
    if(userId){
        
    }

  },[reload])
  return (
    <main>
        <section>
            
        </section>
    </main>
  )
}

export default GoalViewer