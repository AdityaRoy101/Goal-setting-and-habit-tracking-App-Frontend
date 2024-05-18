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
  const [newGoal, setNewGoal] = useState("")
  // const [goalIdddd, setGoalIdd] = useState("")
  // const [newGoal, setNewGoal] = useState("")
  const [totalGoalsLength, setTotalGoalsLength] = useState(0)

  const enterNewGoal = (text) => {
    setGoalName(text)
  }

  // const goalrt = async() => {
  //   await axios.post('/goal/setgoalarray', {userId, goalIdddd})
  //   .then(({data}) => {
  //     console.log(data);
  //     // setGoalId(data);
  //     // console.log(userId);
  //   })
  // }

  const createNewGoal = async() => {
    
    var goalID = goalName;
    await axios.post('/goal/creategoal', {goalID})
    .then(( async(data) => {
      {data.data.error? <>
      {console.log(data.error)}
      {toast.error(`Goal ${goalName} Existed in Database!`)}
      </>:
      // console.log(data.data.error);
      await axios.post('/goal/setgoalarray', {userId, data})
      .then((d) => {
        console.log(d);
        // setGoalId(data);
        // console.log(userId);
        setNewGoal(goalID)
        setTotalGoalsLength(prev => prev+1)
        toast.success(`Goal ${goalName} Created!`);
      })
      console.log(data);
      // setGoalIdd(toString(data));
      // console.log(userId);
      }
    }))

    // goalrt();

    // setNewGoal(goalName)
    // setTotalGoalsLength(prev => prev+1)
    // toast.success(`Goal ${goalName} Created!`);
  }

  return (
    <main className=" flex justify-end items-start mt-10">
        <section className=" flex gap-3 flex-col">
          <div className="flex gap-3">
            <InputComponent text="Enter a Goal" work={enterNewGoal}/>
            <CustomGoalButton text='New Goal' work={createNewGoal} image={addicon} w={35} h={35} />
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