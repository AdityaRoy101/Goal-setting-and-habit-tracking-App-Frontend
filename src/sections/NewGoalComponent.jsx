import DateRangePicker from "../components/DateRangePicker"
import addicon from '../assets/icons/add.png'
import CustomGoalButton from "../components/CustomGoalButton"

const NewGoalComponent = ({ text }) => {
  return (
    <main className=" flex justify-center items-center mt-5">
        <section className=" flex gap-2 flex-col justify-center items-center">
            <h3 className=" font-mono text-[17px]">Select Timeline</h3>
            <div className=" flex gap-4">
                <h2 className=" font-mono font-medium text-[19px]">{ text }</h2>
                <DateRangePicker />
                <CustomGoalButton customStyle=" text-[13px]" text='Create Task' image={addicon} w={20} h={20} />
            </div>
        </section>
    </main>
  )
}

export default NewGoalComponent