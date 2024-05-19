import CustomGoalButton from "../components/CustomGoalButton";

const SelectedFrequencyLogs = ({ logsArray }) => {
  return (
    <main className="">
      <section>
        <h2 className=" underline">Frequency Logs</h2>
          {logsArray.map((ele, index) => {
            return(
                <div key={index} className=" flex gap-5">
                    <h2>{ele}</h2>
                </div>
            );
          })}

      </section>
    </main>
  )
}

export default SelectedFrequencyLogs