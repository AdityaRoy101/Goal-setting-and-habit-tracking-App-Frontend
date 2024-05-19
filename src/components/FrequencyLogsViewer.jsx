
const FrequencyLogsViewer = ({ logs, index }) => {
  return (
    <main>
        <section>
          <h2 className=" font-mono font-normal text-[13px]">T{index} - | { logs } | </h2>
        </section>
    </main>
  )
}

export default FrequencyLogsViewer