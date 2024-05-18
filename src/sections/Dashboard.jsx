import GoalSection from "./GoalSection"
import GoalVisualRpresntation from "./GoalVisualRpresntation"

const Dashboard = () => {
  return (
    <main className=" pr-10 pl-10">
        <section className=" justify-between  flex">
            <GoalVisualRpresntation />
            <GoalSection />
        </section>
    </main>
  )
}

export default Dashboard