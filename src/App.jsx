import GoalSection from "./sections/GoalSection";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <main>
      <section>
        <Toaster position="top-right" toastOptions={{duration: 2000}}/>
        <GoalSection />
      </section>
    </main>
  )
}

export default App;