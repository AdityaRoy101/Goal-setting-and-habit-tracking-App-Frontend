import greenCircle from "../assets/icons/GreenCircle.png"
import CustomGoalButton from "../components/CustomGoalButton";
import FrequencyLogsViewer from "../components/FrequencyLogsViewer";
import imgnotDone from "../assets/icons/notDone.png"
import imgDone from "../assets/icons/Done.png"
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../context/AuthProvider"

const TaskViewer = ({ taskID, task_name, goalID, task_Quantity, frequency_Array, reminder, checked }) => {


  const { setReload } = useContext(GlobalContext);

  const deleteAWholeTask = async() => {
    // console.log(taskID)
    var id = taskID;
    await axios.delete(`/goal/task/deleteatask/${id}`)
        .then(({data}) => 
          data
        )
        .catch(err => console.log(err))

        setReload(prev => !prev)
  }

  const doneOrUndoneATask = async() => {
    var id = taskID;
    var check = checked;
    if(checked === true){
        check = false;
        await axios.patch(`/goal/task/taskcheck`,{id, check})
        .then(({data}) => 
          data
        )
        .catch(err => console.log(err))

        setReload(prev => !prev)
    }else{
        check = true;
        await axios.patch(`/goal/task/taskcheck`,{id, check})
        .then(({data}) => 
          data
        )
        .catch(err => console.log(err))

        setReload(prev => !prev)
    }
  }

  return (
    <main>
        <section>
            <div className=" w-[550px] grid grid-cols-6 font-mono gap-[10px] grid-flow-col font-medium text-[14px] ">
                {checked === true
                ?
                <img 
                    src={imgDone} 
                    alt="YellowCircle"
                    width={17}
                    height={17}
                />
                :
                <img 
                    src={imgnotDone} 
                    alt="YellowCircle"
                    width={17}
                    height={17}
                />
                }
                <h2 className="w-[2px]">{ task_name }</h2>
                <h2>{ task_Quantity }</h2>
                <CustomGoalButton work={deleteAWholeTask} text="Delete Task" customStyle="text-[9.9px]" />
                {checked === true
                ?
                <>
                    <CustomGoalButton work={doneOrUndoneATask} text="Undone" customStyle="text-[9.9px]" />
                </>
                :
                <>
                    <CustomGoalButton work={doneOrUndoneATask} text="Done" customStyle="text-[9.9px]" />
                </>}
            </div>
            <div className="ml-[224px]">
                {frequency_Array.map((freq, index) => {
                        return(
                            <section key={index}>
                                <FrequencyLogsViewer index={index} logs={freq} />
                            </section>
                        );
                })}
            </div>
        </section>
        <h2>--------------------------------------------------------------------</h2>
    </main>
  )
}

export default TaskViewer