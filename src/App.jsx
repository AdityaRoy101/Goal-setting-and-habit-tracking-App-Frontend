import GoalSection from "./sections/GoalSection";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <main>
      <Toaster position="top-right" toastOptions={{duration: 2000}}/>
      <section>
        <GoalSection />
      </section>
    </main>
  )
}

export default App;