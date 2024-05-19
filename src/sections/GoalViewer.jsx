import CustomGoalButton from "../components/CustomGoalButton"
import addImage from "../assets/icons/add.png"
import YellowCircle from "../assets/icons/YellowCircle.png"
import { useContext, useEffect, useState } from "react"
import InputComponent from "../components/InputComponent"
import NewTaskComponent from "./NewTaskComponent"
import addicon from "../assets/icons/add.png"
import toast from "react-hot-toast"
import axios from "axios"
import { GlobalContext } from "../context/AuthProvider"
import TaskProvider from "./TaskProvider"
import addIcon from "../assets/icons/add.png"
import CrossSign from "../assets/icons/CrossSign.png"

const GoalViewer = ({ goalName, goalStartDate, goalEndDate, goaluniqueID, task_array}) => {

  const { userId, setReload } = useContext(GlobalContext);

  const [taskButton, setTaskButton] = useState(false);


  const [taskerName, setTaskerName] = useState("");
  const [taskQuantity, setTaskQuantity] = useState(0);
  const [taskChecked, setTaskChecked] = useState(false);

  var tarray = [];

  const openTaskCreator = () => {
    setTaskButton(true);
  }


  const settingTaskName = (value) => {
    setTaskerName(value)
  }

  // const creatingAWholeTask = async() => {
  //   if(taskerName === ""){
  //     toast.error("Enter Task Name to create Task")
  //   }else{
  //     // setTaskTimeline(tarray);
  //     var userID = userId;
  //     var goalID = goaluniqueID;
  //     var task_name = taskerName;
  //     var task_Quantity = taskQuantity;
  //     var frequency_Array = tarray;
  //     var reminder = taskChecked;
  //     var checked = false;
  //     await axios.post(`/goal/task/createatask`,{userID, goalID, task_name, task_Quantity, frequency_Array, reminder, checked})
  //       .then(({data}) => 
  //         console.log(data)
  //       )
  //       .catch(err => console.log(err))

  //     setReload(prev => !prev)
  //     setTaskButton(false);
  //     setTaskerName("");
  //   }
  // }

  // ===================================================================================

  const creatingAWholeTask = async() => {
    if(taskerName === ""){
      toast.error("Enter Task Name to create Task")
    }else{
      // setTaskTimeline(tarray);
      var userID = userId;
      var goalID = goaluniqueID;
      var task_name = taskerName;
      var task_Quantity = taskQuantity;
      var frequency_Array = tarray;
      var reminder = taskChecked;
      var checked = false;
      await axios.post(`/goal/task/createatask`,{userID, goalID, task_name, task_Quantity, frequency_Array, reminder, checked})
      .then(( async(data) => {
        {data.data.error? <>
        {toast.error(`Task ${task_name} Existed in Database!`)}
        </>
        :
        await axios.post('/goal/task/settaskgoalarray', {goalID, data})
        .then((d) => {
          // console.log(d);
          setReload(prev => !prev)
          toast.success(`Task ${goalName} Created!`);
        })
        .catch(err => console.log(err))
        setReload(prev => !prev)
        }
      }))
      .catch(err => console.log(err))

      setReload(prev => !prev)
      setTaskButton(false);
      setTaskerName("");
    }
  }

  // ===================================================================================
  
  const closeTaskButton = () => {
    setTaskButton(false);
    setTaskerName("");
  }

  const deleteACompleteGoal = async() => {
    var id = goaluniqueID;
    await axios.delete(`/goal/deleteaGoal/${id}`)
      .then(({data}) => 
        {
          // console.log(data)
          toast.success(`Goal ${goalName} Deleted`)
          setReload(prev => !prev)
        }
      )
      .catch(err => console.log(err))
  }

  return (
    <main>
        <section className="">
            <div className=" w-[550px] grid grid-cols-5 font-mono gap-[10px] grid-flow-col font-medium text-[14px] ">
              <img 
                src={YellowCircle} 
                alt="YellowCircle"
                width={10}
                height={10}
              />
              <h2 className="w-[2px]">{ goalName }</h2>
              <h2>{ goalStartDate }</h2>
              <h2>{ goalEndDate }</h2>
              <div className=" justify-start items-start flex flex-col">
                <CustomGoalButton work={openTaskCreator} text="New Task" image={addImage} w={17} h={17} customStyle="text-[9.9px]" />
                <CustomGoalButton work={deleteACompleteGoal} text="Delete Goal" customStyle="text-[9.9px]" />
              </div>
            </div>

            {taskButton === true
            ?
            <section className=" flex gap-4 flex-col mt-2">
              <div className=" flex gap-3 justify-center">
                <button onClick={closeTaskButton}>
                  <img 
                    src={CrossSign} 
                    alt="CrossSign"
                    width={17}
                    height={17}
                  />
                </button>
                <InputComponent work={settingTaskName}  customStyle=" text-[9px] w-[180px]" text="Enter Task Name" />
                <CustomGoalButton work={creatingAWholeTask} image={addIcon} w={10} h={10} text="Create Task" customStyle=" text-[9.9px]"/>
              </div>

              <NewTaskComponent setTaskChecked={setTaskChecked} taskName={taskerName} taskQuantity={setTaskQuantity} taskArray={tarray} />
            </section>
            :
            <></>
            }

            <TaskProvider goaluniqueID={goaluniqueID}/>
        </section>
    </main>
  )
}

export default GoalViewer
