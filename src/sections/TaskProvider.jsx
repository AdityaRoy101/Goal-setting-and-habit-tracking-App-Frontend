import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/AuthProvider"
import TaskViewer from "./TaskViewer";
import axios from "axios";
import CustomGoalButton from "../components/CustomGoalButton";

const TaskProvider = ({ goaluniqueID }) => {
  
  const { setReload, reload } = useContext(GlobalContext)
  const [taskArray, setTaskArray] = useState([])


  useEffect(() => {
    var goalID = goaluniqueID;
    axios.get(`/goal/task/findalltasks/${goalID}`)
      .then(({data}) => 
        {
          setTaskArray(data)
        }
      )
      .catch(err => console.log(err))
  },[reload])

  return (
    <main>
        <section className=" ml-[100px] mt-3">
          {taskArray.length > 0 
          ?
          <div className=" ml-[75px] flex font-mono gap-[15px] mb-3 font-medium text-[15px] underline">
            <h2>Task Name</h2>
            <h2>Quantity</h2>
          </div>
          :
          <></>
          }
          {taskArray.map((task) => {
            return(
              <section key={task._id} className="flex flex-col">
                <TaskViewer 
                  taskID={task._id} 
                  task_name={task.task_name} 
                  goalID={task.goalID} 
                  task_Quantity={task.task_Quantity} 
                  frequency_Array={task.frequency_Array}
                  reminder={task.reminder} 
                  checked={task.checked} 
                />
              </section>
            );
          })}
        </section>
    </main>
  )
}

export default TaskProvider