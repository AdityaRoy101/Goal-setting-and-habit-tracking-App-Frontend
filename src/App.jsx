// import GoalSection from "./sections/GoalSection";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router, Route, Routes, redirect, Navigate } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import Dashboard from "./sections/Dashboard";
import Header from "./sections/Header";
import MainPrivateRoute from "./privateRoutes/MainPrivateRoute";
import HomePage from "./auth/HomePage";



axios.defaults.baseURL = 'http://localhost:5000/api/user';
axios.defaults.withCredentials = true;

const App = () => {

  return (
    <Router>
      <section className="">
        <AuthProvider>
          <Toaster position="top-right" toastOptions={{duration: 2000}}/>

          {/* Header */}
          <Header />

          <Routes>

            {/* /Public Routes */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<SignupPage />} />

            {/* /Private Routes */}
            <Route exact path="/user" element={<MainPrivateRoute />} >
              <Route exact path="" element={<Dashboard />} />
            </Route>

            {/* Redirect Route */}
            <Route path="/redirect" element={<Navigate to="/"/>} />

          </Routes>

        </AuthProvider>
      </section>
    </Router>
  )
}

export default App;