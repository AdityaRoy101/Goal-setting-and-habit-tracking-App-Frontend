import toast from "react-hot-toast"
import FrequencyComponent from "../components/FrequencyComponent"
import InputComponent from "../components/InputComponent"
import CustomGoalButton from "../components/CustomGoalButton"
import { useState } from "react"
import SelectedFrequencyLogs from "./SelectedFrequencyLogs"

const NewTaskComponent = ({ work, taskName, taskQuantity, taskArray, setTaskChecked }) => {

  const [settedTime, setSettedTime] = useState("")

  const settingQuantity = (value) => {
    taskQuantity(value)
  }

  const settimeToTaskArray = () => {
    if(settedTime !== "")
      taskArray.push(settedTime);
  }

  const popTimeElements = () => {
    if(settedTime !== "")
      taskArray.pop();
  }
  
  return (
    <main className=" mt-2">
      <section className=" flex gap-2 ml-[145px] flex-col">
        <div className=" flex gap-[110px] items-center">
          <h2 className=" font-mono text-[14px] ">Task Name</h2>
          <h2 className=" font-mono">{ taskName }</h2>
        </div>
        <div className=" flex gap-[60px] items-center">
          <h2 className=" font-mono text-[14px]">Enter Quantity</h2>
          <InputComponent typee="number" work={settingQuantity} text='Enter Quantity' customStyle='text-[12px] w-[99.9px]' />
        </div>
        <div className=" flex gap-[52px] items-center">
          <h2 className=" font-mono">Set Frequency</h2>
          <FrequencyComponent taskArray={taskArray} sendTime={setSettedTime} />
        </div>
        <div className=" ml-[115px] flex justify-center items-center gap-4">
          <CustomGoalButton work={settimeToTaskArray} text="Select" customStyle="text-[11.9px]" />
          <CustomGoalButton work={popTimeElements} text="Delete" customStyle="text-[11.9px]" />
          <div className=" flex justify-center items-center">
            <input value={setTaskChecked} onChange={() => setTaskChecked(prev => !prev)} type="checkbox" />
            <label>Reminder</label>
          </div>
        </div>

        {taskArray.length > 0
        ?
        <section>
          {/* {console.log(taskArray)} */}
          <SelectedFrequencyLogs logsArray={taskArray}/>
        </section>
        :
        <></> }
      </section>
    </main>
  )
}

export default NewTaskComponent