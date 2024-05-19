
const InputComponent = ({ text, work ,customStyle, defText, typee }) => {
  // var typrr = toString(typee)
  return (
    <main className=" flex justify-center items-center">
        <section>
          {typee ?
          <input 
            type={typee} 
            name="text" 
            placeholder={text}
            onChange={(e) => work(e.target.value)}
            className={` ${customStyle} w-[300px] border-[1px] border-black rounded-md p-2`}
          />
          :
          <input 
            type="text"
            name="text" 
            placeholder={text}
            onChange={(e) => work(e.target.value)}
            className={` ${customStyle} w-[300px] border-[1px] border-black rounded-md p-2`}
          />
          }
        </section>
    </main>
  )
}

export default InputComponent