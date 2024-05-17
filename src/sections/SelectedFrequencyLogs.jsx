import CustomGoalButton from "../components/CustomGoalButton";

const SelectedFrequencyLogs = ({ logsArray }) => {
  return (
    <main className="">
      <section>
        <h2>Frequency Logs</h2>
        {/* <section className=" gap-2"> */}
          {logsArray.map((ele, index) => {
            return(
              // <section key={index} className=" gap-3">
                <div key={index} className=" flex gap-5">
                    <h2>{ele}
                  {console.log(ele)}</h2>
                  <CustomGoalButton text="Delete" customStyle="text-[12px]" />
                </div>
              // </section>
            );
          })}
        {/* </section> */}
      </section>
    </main>
  )
}

export default SelectedFrequencyLogs