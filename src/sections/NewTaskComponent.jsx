import FrequencyComponent from "../components/FrequencyComponent"
import InputComponent from "../components/InputComponent"

const NewTaskComponent = ({ taskName, taskQuantity, taskFrequency }) => {
  return (
    <main className=" mt-5">
        <section className=" flex gap-2 ml-5 flex-col">
            <h2 className=" font-mono">{ taskName }</h2>
            <InputComponent text='Enter Quantity' customStyle='text-[12px]' />
            <h2 className=" font-mono">Set Frequency</h2>
            <FrequencyComponent />
        </section>
    </main>
  )
}

export default NewTaskComponent