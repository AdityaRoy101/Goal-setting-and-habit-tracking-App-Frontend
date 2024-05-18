import DateRangePicker from "../components/DateRangePicker"
import addicon from '../assets/icons/add.png'
import CustomGoalButton from "../components/CustomGoalButton"
import { useState } from "react"
import InputComponent from "../components/InputComponent"
import NewTaskComponent from "./NewTaskComponent"

const NewGoalComponent = ({ text }) => {

  const [taskLength, setTaskLength] = useState(0)
  const [taskName, setTaskName] = useState("")
  const [createTask, setCreateTask] = useState("")

  const setTaskNamee = (text) => {
    setTaskName(text)
  }

  const createNewTask = () => {
    setCreateTask(taskName)
    setTaskLength(prev => prev+1)
  }

  return (
    <main className=" flex justify-center items-center mt-5">
        <section className=" flex gap-2 flex-col border-[1px] border-spacing-3 border-dashed border-black p-2 rounded-md">
            <div className=" flex justify-between mt-2">
              <h3 className=" font-mono text-[17px] underline">Task Name</h3>
              <h3 className=" font-mono text-[17px] underline">Select Timeline</h3>
            </div>
            <div className=" flex gap-4 flex-col mt-2">
              <div className=" flex gap-5 justify-between">
                <h2 className=" font-mono font-medium text-[19px]">{ text }</h2>
                <DateRangePicker />
              </div>
              <div className=" flex gap-3">
                <InputComponent work={setTaskNamee} customStyle=" text-[12px]" text="Enter Task" />
                <CustomGoalButton work={createNewTask} customStyle=" text-[12px]" text='Create Task' image={addicon} w={20} h={20} />
              </div>
            </div>
            {taskLength > 0
            ?
            <section>
              <NewTaskComponent taskName={createTask} />
            </section>
            :
            <></>
            }
        </section>
    </main>
  )
}

export default NewGoalComponent