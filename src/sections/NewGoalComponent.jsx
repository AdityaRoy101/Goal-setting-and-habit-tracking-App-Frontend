import DateRangePicker from "../components/DateRangePicker"
import addicon from '../assets/icons/add.png'
import CustomGoalButton from "../components/CustomGoalButton"
import { useContext, useEffect, useState } from "react"
import InputComponent from "../components/InputComponent"
import NewTaskComponent from "./NewTaskComponent"
import axios from "axios"
import toast from "react-hot-toast"
import { GlobalContext } from "../context/AuthProvider"
import CrossSign from "../assets/icons/CrossSign.png"

const NewGoalComponent = ({ text, openButton, setCreateGoal }) => {

  const { userId, setReload } = useContext(GlobalContext);

  const [goalName, setGoalName] = useState(text);
  const [goalid, setGoalid] = useState(0);

  const [goalStartDate, setGoalStartDate] = useState("");
  const [goalEndDate, setGoalEndDate] = useState("");


// ============================================================================


  const createNewGoal = async() => {
    
    if(text === ""){
      toast.error("Enter Goal Name to Proceed")
    }else{

    var goalID = text;
    await axios.post('/goal/creategoal', {userId, goalID, goalStartDate, goalEndDate})
    .then(( async(data) => {
      {data.data.error? <>
      {/* {console.log(data.error)} */}
      {toast.error(`Goal ${goalName} Existed in Database!`)}
      </>
      :
      await axios.post('/goal/setgoalarray', {userId, data})
      .then((d) => {
        // console.log(d);
        setGoalid(goalID)
        // setTotalGoalsLength(prev => prev+1)
        toast.success(`Goal ${goalName} Created!`);
      })
      .catch(err => console.log(err))
      // console.log(data);
      setReload(prev => !prev)
      }
    }))
    .catch(err => console.log(err))

    openButton(false);
    }
  }


// =================================================================
  const newTask = () => {
    setCreateGoal(false)
  }

  return (
    <main className=" flex justify-center items-start gap-3 mt-5">
        <section className=" flex gap-2 flex-col border-[1px] border-spacing-3 border-dashed border-black p-2 rounded-md">
            <div className=" flex justify-between mt-2">
              <h3 className=" font-mono text-[17px] underline">Task Name</h3>
              <h3 className=" font-mono text-[17px] underline">Select Timeline</h3>
            </div>
            <div className=" flex gap-4 flex-col mt-2">
              <div className=" flex gap-5 justify-between">
                <h2 className=" font-mono font-medium text-[19px]">{ text }</h2>
                <DateRangePicker startDate={setGoalStartDate} endDate={setGoalEndDate}/>
              </div>
              <CustomGoalButton work={createNewGoal} customStyle=" text-[12px]" text='Create Goal'/>
            </div>
        </section>
        <button onClick={newTask}>
        <img 
          src={CrossSign} 
          alt="CrossSign"
          width={20}
          height={20}
        />
      </button>
    </main>
  )
}

export default NewGoalComponent