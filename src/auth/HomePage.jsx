import InputComponent from "../components/InputComponent"
import LinkTag from "../components/LinkTag"
import CustomGoalButton from '../components/CustomGoalButton'
import { useNavigate } from 'react-router-dom';



const HomePage = () => {

  const navigate = useNavigate();
  const signingUp = () => {
    navigate('/register');
  }
  return (
    <main className=" pr-10 pl-10 mt-5">
      <section className=" flex flex-col">
        {/* <Header /> */}
        <section className=" hero section mt-[140px] flex justify-center items-center">
          <div className=" flex justify-center items-center flex-col">
            <h1 className=" text-[35px] font-bold font-palanquin 2xl:text-[55px] xl:text-[50px] md:text-[45px] sm:text-[40px]">Goal and Habit Tracker</h1>
            <p className=" w-[500px] text-center text-gray-500 text-[10px] xl:text-[17px] md:text-[16px] sm:text-[15px]">Here you can create your own goals and tasks to perform the goals</p>
          </div>
        </section>
        <section className="flex mt-10 justify-center items-center flex-row gap-2">
          <InputComponent text="Subscribe to newsletter"/>
          <CustomGoalButton text="Subscribe"/>
        </section>
        <section className=" justify-center items-center flex mt-5 gap-2">
          <h3 className=" font-montserrat font-medium flex">Want to try now</h3>
          <LinkTag text="Sign Up" route={signingUp} />
        </section>
      </section>
    </main>
  )
}

export default HomePage