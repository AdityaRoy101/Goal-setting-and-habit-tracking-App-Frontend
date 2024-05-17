
const CustomGoalButton = ({ text, work, image, w, h, customStyle }) => {
  return (
    <main className=" flex justify-center items-center">
        <section>
            <button onClick={work} className=" rounded-md border-[1px] p-1 border-black gap-2 flex justify-center items-center flex-row">
                <img 
                    src={image} 
                    alt="buttonImage"
                    width={w}
                    height={h}
                />
                <h3 className={` ${customStyle} font-palanquin font-medium text-[20px]`}>{ text }</h3>
            </button>
        </section>
    </main>
  )
}

export default CustomGoalButton