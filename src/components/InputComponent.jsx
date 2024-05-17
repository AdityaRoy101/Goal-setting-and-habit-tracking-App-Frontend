
const InputComponent = ({ text, work ,customStyle }) => {
  return (
    <main className=" flex justify-center items-center">
        <section>
            <input 
                type="text" 
                name="text" 
                placeholder={text}
                onChange={(e) => work(e.target.value)}
                className={` ${customStyle} w-[300px] border-[1px] border-black rounded-md p-2`}
            />
        </section>
    </main>
  )
}

export default InputComponent