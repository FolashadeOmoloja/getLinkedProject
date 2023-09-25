interface IProps{
        number?:string
      }
const NumberLine:React.FC<IProps> = ({number}) => {
  return (
    <div className="flex flex-col gap-[5px] md:gap-[11px] items-center ">
        <div className="bg-[#D434FE] w-[4px] md:h-[137px] h-[77px]">

        </div>
        <div className="md:w-[53px] md:h-[53px] w-[19.32px] h-[19.32px] rounded-[100%] flex justify-center items-center numbercircle">
               <span className="text-white">{number}</span>
        </div>
    </div>
  )
}

export default NumberLine