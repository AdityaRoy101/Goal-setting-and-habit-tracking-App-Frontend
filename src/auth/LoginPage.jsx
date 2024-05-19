
import SignInForm from './SignInForm.jsx'
import homeImage from '../assets/icons/Home_image.png'


const LoginPage = () => {
  return (
    <main>
      <section className=' flex flex-row justify-center items-center pr-10 pl-10'>
        <section className='h-[400px] flex justify-center items-center flex-col ml-[20px] mt-10 pr-10 mb-10 border-dashed border-spacing-5 border-2 border-gray-400 rounded-xl'>
          <div className=' flex gap-2 justify-center items-center pl-20'>
            <img 
              src={homeImage} 
              alt="heroimage"
              width={30}
              height={30}
              className=' rounded-xl'
            />
            <h1 className=' text-[30px] font-palanquin font-medium'>Habit Tracker</h1>
          </div>
  
          <div className=' mt-10 w-[450px]'>
            <SignInForm />
          </div>
        </section>
      </section>
    </main>
  )
}

export default LoginPage