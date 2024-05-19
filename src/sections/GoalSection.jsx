import CustomGoalButton from "../components/CustomGoalButton"
import InputComponent from "../components/InputComponent"
import addicon from '../assets/icons/add.png'
import { useContext, useState } from "react"
import NewGoalComponent from "./NewGoalComponent"
import { GlobalContext } from "../context/AuthProvider"
import toast from 'react-hot-toast';
import axios from "axios"


const GoalSection = () => {

  const { userId } = useContext(GlobalContext);

  const [goalName, setGoalName] = useState("")

  const [createGoal, setCreateGoal] = useState(false)


  const enterNewGoal = (text) => {
    setGoalName(text)
  }

  const goalLengthTrue = () => {
    if(goalName === ""){
      toast.error("Enter goal name to create goal")
    }else{
      setCreateGoal(true);
    }
  }

  return (
    <main className=" flex justify-end items-start mt-10">
        <section className=" flex gap-3 flex-col">
          <div className="flex gap-3">
            <InputComponent text="Enter a Goal" work={enterNewGoal}/>
            <CustomGoalButton text='New Goal' work={goalLengthTrue} image={addicon} w={35} h={35} />
          </div>
          {createGoal === true
          ?
          <section className="">
            <NewGoalComponent text={goalName} openButton={setCreateGoal} setCreateGoal={setCreateGoal}/>
          </section>
          :
          <></>
          }
        </section>
    </main>
  )
}

export default GoalSection