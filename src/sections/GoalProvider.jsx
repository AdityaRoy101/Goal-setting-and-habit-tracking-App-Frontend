import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/AuthProvider"
import axios from "axios";
import GoalViewer from "./GoalViewer";

// GoalViewer.jsx
const GoalProvider = () => {

  const { userId, setReload, reload } = useContext(GlobalContext);

  const [goalArray, setGoalArray] = useState([])

  useEffect(() => {
    if(userId){
      axios.get(`/goal/allusergoals/${userId}`)
        .then(({data}) => 
          {
            setGoalArray(data.user)
            // console.log(data.user)
          }
        )
        .catch(err => console.log(err))
    }

  },[reload])

  return (
    <main className=" mt-4">
        <section>
            {goalArray.length > 0 ?
            <div className=" ml-[120px] flex font-mono gap-[34px] mb-3 font-medium text-[15px] underline">
              <h2>Goal Name</h2>
              <h2>Start Date</h2>
              <h2>End Date</h2>
            </div>
            :
            <></>
            }
            {goalArray.map((goal) => {
              return(
                <section key={goal._id} className="flex flex-col">
                  <GoalViewer 
                    goalName={goal.goalID} 
                    goalStartDate={goal.goalStartDate} 
                    goalEndDate={goal.goalEndDate} 
                    goaluniqueID={goal._id} 
                    task_array={goal.task_array}
                  />
                  <br/>
                </section>
              );
            })}
        </section>
    </main>
  )
}

export default GoalProvider