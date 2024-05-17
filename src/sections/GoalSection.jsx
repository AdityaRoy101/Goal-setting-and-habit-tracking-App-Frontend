import CustomGoalButton from "../components/CustomGoalButton"
import InputComponent from "../components/InputComponent"
import addicon from '../assets/icons/add.png'
import { useState } from "react"
import NewGoalComponent from "./NewGoalComponent"
import toast from 'react-hot-toast';

const GoalSection = () => {

  const [goalName, setGoalName] = useState("")
  const [newGoal, setNewGoal] = useState("")
  const [totalGoalsLength, setTotalGoalsLength] = useState(0)

  const enterNewGoal = (text) => {
    setGoalName(text)
  }

  const createNewGoal = () => {
    setNewGoal(goalName)
    setTotalGoalsLength(prev => prev+1)
    toast.success(`Goal ${goalName} Created!`);
  }

  return (
    <main className=" flex justify-center items-center mt-10">
        <section className=" flex gap-3 flex-col">
          <div className="flex gap-3">
            <InputComponent text="Enter a Goal" work={enterNewGoal}/>
            <CustomGoalButton text='Create Goal' work={createNewGoal} image={addicon} w={35} h={35} />
          </div>
          {totalGoalsLength > 0
          ?
          <section className="">
            <NewGoalComponent text={newGoal}/>
          </section>
          :
          <></>
          }
        </section>
    </main>
  )
}

export default GoalSection