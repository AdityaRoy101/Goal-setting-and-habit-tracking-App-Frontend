import GoalSection from "./sections/GoalSection";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router, Route, Routes, redirect, Navigate } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import Dashboard from "./sections/Dashboard";



axios.defaults.baseURL = 'http://localhost:5000/api/user';
axios.defaults.withCredentials = true;

const App = () => {

  return (
    <Router>
      <section className=" pr-10 pl-10">
        <AuthProvider>
          <Toaster position="top-right" toastOptions={{duration: 2000}}/>

          <Routes>
            {/* /Public Routes */}
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<SignupPage />} />
          </Routes>

          {/* <GoalSection /> */}
          {/* <LoginPage /> */}
        </AuthProvider>
      </section>
    </Router>
    // <main>
    //   <section>
    //     <Toaster position="top-right" toastOptions={{duration: 2000}}/>
    //     <GoalSection />
    //   </section>
    // </main>
  )
}

export default App;