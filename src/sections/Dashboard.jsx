import GoalSection from "./GoalSection"
import GoalVisualRpresntation from "./GoalVisualRpresntation"

const Dashboard = () => {
  return (
    <main>
        <section className=" justify-between  flex">
            <GoalVisualRpresntation />
            <GoalSection />
        </section>
    </main>
  )
}

export default Dashboard