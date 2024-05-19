import GoalProvider from "./GoalProvider"


const GoalVisualRpresntation = () => {
  return (
    <main className=" mt-10">
        <section className=" pl-10 w-[600px] rounded-lg  border-black border-[1px] border-dashed flex flex-col">
            <div className=" items-center justify-center flex">
              <h2 className=" underline mt-5 font-mono text-[20px] font-semibold">Your Daily Goals are shown up here</h2>
            </div>
            <GoalProvider />
        </section>
    </main>
  )
}

export default GoalVisualRpresntation